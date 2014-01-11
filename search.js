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

  this.query = function(rootId, query) {
    console.log('Query');
 
    var docs = self.doc_ids; // TODO: filter

    return _.map(docs, function(doc) {
      return {
        id: doc,
        type: self.docs[doc].doc.type
      }
    });
  };

  function extract_terms(str,callback) {
    if (callback) callback(tokenizer.extract_terms(str));
  }
}

module.exports = Search;