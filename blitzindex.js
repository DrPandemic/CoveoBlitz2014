var ThriftShop = require('thrift');

var Indexer = require('./Indexer.js');
var ttypes = require('./indexer_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var transport = new ThriftShop.TFramedTransport();

var Search = require('./search');
var search = new Search();

var server = ThriftShop.createServer(Indexer, {
	indexArtist: function (artist, result) {
    console.log(artist);
    search.index(artist, 'artist', function () {
      result(null);
    });
  },
  indexAlbum: function (album, result) {
    console.log(album);
    search.index(album, 'album', function () {
      result(null);
    });
  },
  reset: function(result) {
    result(null);
  },
  ping: function(result) {
    console.log("ping");
    result(null);
  },
  query: function (query, result) {
    console.log(query);
    search.query(query);
    result(null);
  }
}, { transport : ttransport.TBufferedTransport });
server.listen(9090);
console.log('Server started!');
