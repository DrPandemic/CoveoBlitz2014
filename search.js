var _ = require('underscore'),
    tokenizer = require('./tokenizer.js');

function Search() {
  this.dic = {};

  this.index = function(doc, callback) {
    console.log('Indexing.');

    var text = doc.text;
    extract_terms(text, function (terms) {
      

      callback();
    });
  };

  this.query = function(rootId, query) {
    console.log('Query');
  };

  function extract_terms(str,callback) {
    callback(tokenizer.extract_terms(str));
  }
}

module.exports = Search;