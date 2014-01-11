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

  /*
  return :
  [
    id:The good documents
  ]
   */
  function filter(rootID,tree) {
    var tag = tree[0][0];
    //if (tag === '*')
  }

}

module.exports = Search;