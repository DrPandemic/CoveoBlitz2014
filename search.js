var _ = require('underscore');

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

  function extract_terms() {
  }
}

module.exports = Search;