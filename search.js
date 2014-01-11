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

    var id = get_doc_id();

    var text = doc.text;
    var doc_terms = [];
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

    save_doc(id, doc, doc_terms);
    callback();
  };

  var current_doc_id = 1;
  function get_doc_id() {
    return current_doc_id++;
  }
  function save_doc(id, doc, terms) {
    self.docs[id] = {
      doc: doc,
      terms: _.unique(terms)
    }

    self.doc_ids.push(id);
  }

  this.query = function(rootId, query) {
    console.log('Query');
  };

  function extract_terms(str,callback) {
    callback(tokenizer.extract_terms(str));
  }

  /*
  return :
  [
    id:The good documents
  ]
   */
  function filter(rootID,tree) {
    var tag = tree[0][0];
    if (tag === '*') {
      return self.doc_ids;
    } else {
      return self.dic[tag] ? _.keys(self.dic[tag].postings) : [];
    }
  }

}

module.exports = Search;