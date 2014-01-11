var Search = require('./search');
var search = new Search();

search.index({text: 'Test'});
search.query('yolo');