var ThriftShop = require('thrift');

var Indexer = require('./Indexer.js');
var ttypes = require('./document_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var transport = new ThriftShop.TFramedTransport();

var Search = require('./search');
var search = new Search();

var server = ThriftShop.createServer(Indexer, {
  indexArtist: function (artist, result) {
    var s = Date.now()
    search.index(artist, 1, function () {
      console.log(Date.now() - s);
      result(null);
    });
  },
  indexAlbum: function (album, result) {
    var s = Date.now()
    search.index(album, 2, function () {
      console.log(Date.now() - s);
      result(null);
    });
  },
  reset: function(result) {
    search.reset();
    result(null);
  },
  ping: function(result) {
    console.log("ping");
    result(null);
  },
  query: function (query, result) {
    var res = search.query(query) || { results: [], facets: [] };
    for (var i in res.results) {
      res.results[i] = new ttypes.QueryResult(res.results[i]);
    }
    var res = new ttypes.QueryResponse(res);
    console.log(res);
    result(null, res);
  }
}, { transport : ttransport.TBufferedTransport });
server.listen(9090);
console.log('Server started!');
