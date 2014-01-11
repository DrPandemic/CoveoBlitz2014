var Search = require('./search');
var search = new Search();

search.index('Test');
search.commit();
search.query('yolo');