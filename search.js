function Search() {
  this.dic = {};

  this.index = function(doc) {
    console.log('Indexing.');
  };

  this.commit = function() {
    console.log('Commit');

    this.query = do_query;
  };

  this.query = function() {
    console.error('Must commit first.');
  };

  function do_query(query) {
    console.log('Query');
  }
}

module.exports = Search;