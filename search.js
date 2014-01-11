var _ = require('underscore'),
    ttypes = require('./document_types'),
    tokenizer = require('./tokenizer.js');

function Search() {
  /*
  {
    termN: {
      postings: {
        docid: {
          frequency: int,
          positions: [int]
        }
      }
      nb_docs: float
    }
  }
  */
  this.dic = {};
  /*
  {
    id: {
      doc: {},
      terms: []
    }
  }
  */
  this.docs = {};
  this.doc_ids = [];
  var self = this;

  this.index = function(doc, type, callback) {
    console.log('Indexing ' + doc.id + '.');

    var id = doc.id;

    var text = get_text_to_index(doc);
    var doc_terms = [];

    if (text) {
      extract_terms(text, function (terms) {
        _.each(terms, function (term, i) {
          if (!self.dic[term]) { // first time we see this term
            self.dic[term] = {
              postings: {},
              nb_docs: 1
            };
            self.dic[term].postings[id] = {
              frequency: 1,
              postitions: null//TODO: [i]
            };
          } else if (!self.dic[term].postings[id]) { // first time we see this term in this doc
            self.dic[term].postings[id] = {
              frequency: 1/*,
              positions: null//TODO: [i]*/
            };
            self.dic[term].nb_docs++;
          } else {
            self.dic[term].postings[id].frequency++;
            //TODO: this.dic[term].postings[id].positions.push(i);
          }
        });

        doc_terms.push(terms);
      });
    } else {
      console.log(id + ' has no text.');
    }

    save_doc(id, doc, type, doc_terms);
    if (callback) callback();
  };

  function get_text_to_index(doc) {
    var text = '';
    _.each(['text', 'name', 'origin', 'active_start', 'active_end', 'genres', 'labels', 'albums', 'group_names', 'instruments_played', 'artists', 'release_date', 'track_names', 'type'],
    function(field) {
      if (doc[field]) text += ' ' + doc[field];
    });
    return text;
  }

  function save_doc(id, doc, type, terms) {
    doc.type = type;

    self.docs[id] = {
      doc: doc,
      terms: _.unique(terms)
    }

    self.doc_ids.push(id);
  }

  this.query = function(query) {
    console.log('Query',query);

    var filtered = filter(query.rootID, query.queryTreeNodes, query.facetFilters);
    var mydocs = filtered.docs;

    return {
      results: _.map(mydocs, function(doc) {
        return new ttypes.QueryResult({
          id: doc,
          documentType: self.docs[doc].doc.type
        })
      }),
      facets: build_facets_results(mydocs)
    };
  };

  function build_facets_results(docs) {
  /* return:
  [
  {
    metadata: [
      {value: string,
      count: int}
    ]
  ]
  */

  /*
  {
    metadata: {
      value: count
    }
  }
  */
    var facets = {};
    _.each(docs, function(doc) {
      var d = self.docs[doc].doc;
      _.each(
      ['name', 'origin', 'active_start', 'active_end', 'genres', 'labels', 'albums', 'group_names', 'instruments_played', 'artists', 'release_date', 'track_names', 'type'],
      function (field) {
        var value = d[field];
        if (value) {
          var values = _.isArray(value) ? _.flatten(value) : [value];
          _.each(values, function(val) {
            if (_.isString(val)) val = val.trim();
            if (!facets[field]) { // first time we see this metadata
              facets[field] = {};
              facets[field][val] = 1;
            } else if (!facets[field][val]) { // first time we see this value
              facets[field][val] = 1;
            } else {
              facets[field][val]++;
            }
          });
        }
      });
    });

    var results = [];
    _.each(facets, function(values, meta) {
      results.push(new ttypes.FacetResult({
        metadataName: meta,
        values: _.map(values, function(count, value) {
          if (meta === 'type') value = (value == 1) ? 'artist' : 'album';
          return new ttypes.FacetValue({ value: value, count: count});
        })
      }));
    });
    return results;
  }

  this.reset = function() {
    this.dic = {};
    this.docs = {};
    this.doc_ids = [];
  }

  function extract_terms(str,callback) {
    if (callback) callback(tokenizer.extract_terms(str));
  }


  function rank(query, docs) {
    var scores = [];
  }


  function filter1(rootID,tree) {
    var terms = [];
    var docs = [];
    var tag = tree[0].value;
    if (tag === '*') {
      docs = self.doc_ids;
    } else {

      if (self.dic[tag]) {
        terms.push(tag);
        docs = docs.concat(docs, _.keys(self.dic[tag].postings));
      } else {} //TODO: handle 
    }

    return { docs: _.flatten(docs), terms: terms };
  }


  function filter(rootID, tree) {
    var terms = [];
    var docs = [];
    var tag = tree[0].value;
    if (tag === '*') {
      docs = self.doc_ids;
    } else {
      if(tree.length == 1) {
        return filter1(rootID,tree);
      } else {
        var queryTerms = [];
        for(var node in tree) {
          //2 = literal
          var value = tree[node].value;
          console.log(tree[node].type,self.dic[value]);
          if(tree[node].type === '2' && self.dic[value]) {
            console.log('good');
            terms.push(value);
            docs.push(_.keys(self.dic[value].postings));
          }
        }
        docs = intersectLists(docs);
      }

      return { docs: _.flatten(docs), terms: terms };
      }
  }

  function intersectLists(lists) {
    if (!lists.length) return [];

    var list = lists[0];
    for (var i = 1; i < lists.length; ++i) {
      list = _.intersection(list, lists[i]);
    }
    return list;
  }
}

module.exports = Search;
