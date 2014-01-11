var util = require('util');

var Search = require('./search');
var search = new Search();

//
// THRIFT SERVICE
//

var ThriftShop = require('thrift');
var Indexer = require('./Indexer.js');
var ttypes = require('./document_types.js');
var ttransport = require('thrift/lib/thrift/transport');

var server = ThriftShop.createServer(Indexer, {
  indexArtist: function (artist, result) {
    // var s = Date.now();
    search.index(artist, 1, function () {
      // console.log(Date.now() - s);
      result(null);
    });
  },
  indexAlbum: function (album, result) {
    // var s = Date.now();
    search.index(album, 2, function () {
      // console.log(Date.now() - s);
      result(null);
    });
  },
  reset: function(result) {
    console.log('reset');
    search.reset();
    result(null);
  },
  ping: function(result) {
    console.log('ping');
    result(null);
  },
  query: function (query, result) {
    // console.log(util.inspect(query, false, null));
    // var s = Date.now();
    var res = new ttypes.QueryResponse(search.query(query));
    // console.log(s);
    // console.log(util.inspect(search.dic, false, null));
    // console.log(util.inspect(res.results, false, null));
    result(null, res);
  }
}, { transport : ttransport.TBufferedTransport });
server.listen(9090);
console.log('Server started!');


//
// FRONTEND REST API
//

var restify = require('restify');

var server = restify.createServer({
  name: 'ThriftShop',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/search', function (req, res, next) {
  var query = new ttypes.Query({
    rootId: 1,
    queryTreeNodes: [ { value: req.params.q, type: 2, leftPart: -1, rightPart: -1, id: 1 } ],
    facetFilters: []
  });
  var results = search.query(query);
  var docs = [];
  for (var i in results.results) {
    var doc = search.docs[results.results[i].id].doc;
    // if (doc.artists && doc.artists.length) {
    //   for (var j in doc.artists) {
    //     if (search.docs[doc.artists[j].id]) doc.artists[j] = search.docs[doc.artists[j].id].doc;
    //   }
    // }
    // if (doc.albums && doc.albums.length) {
    //   for (var j in doc.albums) {
    //     if (search.docs[doc.albums[j].id]) doc.albums[j] = search.docs[doc.albums[j].id].doc;
    //   }
    // }
    docs.push(doc);
  }
  res.send(docs);
});

server.get('/doc/:id', function (req, res, next) {
  var doc = search.docs[req.params.id].doc;
  // if (doc.artists && doc.artists.length) {
  //   for (var j in doc.artists) {
  //     if (search.docs[doc.artists[j]]) doc.artists[j] = search.docs[doc.artists[j]].doc;
  //   }
  // }
  // if (doc.albums && doc.albums.length) {
  //   for (var j in doc.albums) {
  //     if (search.docs[doc.albums[j]]) doc.albums[j] = search.docs[doc.albums[j]].doc;
  //   }
  // }
  res.send(doc);
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
