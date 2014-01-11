function Search() {
  this.dic = {};

  this.index = function(doc) {
    console.log('Indexing.');
  };

  this.query = function() {
    console.log('Query');
  };
}

module.exports = Search;