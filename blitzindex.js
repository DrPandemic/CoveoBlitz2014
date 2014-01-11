var ThriftShop = require('thrift');

var Indexer = require('./Indexer.js');
var ttypes = require('./indexer_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var transport = new ThriftShop.TFramedTransport();

var server = ThriftShop.createServer(Indexer, {
	indexArtist: function (artist, result) {
    console.log(artist);
	},
  indexAlbum: function (album, result) {
    console.log(album);
  },
  reset: function(result) {
      result(null);
  },
  ping: function(result) {
    console.log("ping");
    result(null);
  },
}, { transport : ttransport.TBufferedTransport });
server.listen(9090);
console.log("Server started!");
