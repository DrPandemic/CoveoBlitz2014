var _ = require('underscore'),
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
    console.log('Indexing.');

    var id = doc.id;

    var text = doc.text;
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
              frequency: 1,
              positions: null//TODO: [i]
            };
            self.dic[term].nb_docs++;
          } else {
            self.dic[term].postings[id].frequency++;
            //TODO: this.dic[term].postings[id].positions.push(i);
          }
        });

        doc_terms.push(terms);
      });
    }

    save_doc(id, doc, type, doc_terms);
    if (callback) callback();
  };

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

    return _.map(mydocs, function(doc) {
      return {
        id: doc,
        documentType: self.docs[doc].doc.type
      }
    });
  };

  this.reset = function() {
    this.dic = {};
    this.docs = {};
    this.doc_ids = [];
  }

  function extract_terms(str,callback) {
    console.log(callback);
    if (callback) callback(tokenizer.extract_terms(str));
  }

  function rank(query, docs) {
    var scores = [];
  }

  /*
  return :
  [
    id:The good documents
  ]
   */
  function filter(rootID,tree) {
    var terms = [];
    var docs = [];
    var tag = tree[0].value;
    if (tag === '*') {
      docs = self.doc_ids;
    } else {
      if (self.dic[tag]) {
        terms.push(tag);
        docs.push(_.keys(self.dic[tag].postings));
      } else {} //TODO: handle operators
    }

    return { docs: _.flatten(docs), terms: terms };
  }

}

module.exports = Search;
