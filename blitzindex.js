var thrift = require('thrift');

var Indexer = require('./Indexer.js');
var ttypes = require('./indexer_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var transport = new thrift.TFramedTransport();

var server = thrift.createServer(Indexer, {
	indexArtist : function (artist, result) {
		console.log(artist)
	},
        indexAlbum : function (album, result) {
            console.log(album);
        },
        reset : function(result) {
            result(null);
        },
        ping : function(result) {
            console.log("ping");
            result(null);
        },
	}, {
		transport : ttransport.TBufferedTransport
	});
console.log("Server started!");
server.listen(9090);
