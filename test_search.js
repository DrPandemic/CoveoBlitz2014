var Search = require('./search');
var search = new Search();

search.index({id: 1, text: 'Test'}, 'album', function() {
  console.log(search.query({ rootId: 1, queryTreeNodes: [{value: '*'}]}));
});