var ThriftShop = require('thrift');

var Indexer = require('./Indexer.js');
var ttypes = require('./indexer_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var transport = new ThriftShop.TFramedTransport();

var search = require('./search');

var server = ThriftShop.createServer(Indexer, {
	indexArtist: function (artist, result) {
    console.log(artist);
    search.index(artist, 'artist');
  },
  indexAlbum: function (album, result) {
    console.log(album);
    search.index(album, 'album');
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
console.log('Server started!');
