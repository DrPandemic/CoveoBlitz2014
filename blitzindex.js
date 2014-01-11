var util = require('util');

var Search = require('./search');
var search = new Search();

//
// THRIFT SERVICE
//

var docs = 0;

var ThriftShop = require('thrift');
var Indexer = require('./Indexer.js');
var ttypes = require('./document_types.js');
var ttransport = require('thrift/lib/thrift/transport');
12
var server = ThriftShop.createServer(Indexer, {
  indexArtist: function (artist, result) {
    search.index(artist, 1, function () {
      result(null);
      docs++;
      if (docs > 40000) {
        search.reset();
        docs = 0;
      }
    });
  },
  indexAlbum: function (album, result) {
    search.index(album, 2, function () {
      result(null);
      docs++;
      if (docs > 40000) {
        search.reset();
        docs = 0;
      }
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
    // console.log(util.inspect(search.dic, false, null));
    var res = new ttypes.QueryResponse(search.query(query));
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

server.post('/indexArtist', function (req, res, next) {
  delete req.body.__isset;
  console.log(req.body);
  search.index(req.body, 1, function () {
    res.send(200);
  });
});

server.post('/indexAlbum', function (req, res, next) {
  delete req.body.__isset;
  console.log(req.body);
  search.index(req.body, 2, function () {
    res.send(200);
  });
});

server.post('/query', function (req, res, next) {
  delete req.body.__isset;
  console.log(req.body);
  var res = search.query(req.body);
  console.log(util.inspect(res.results, false, null));
  res.send(200, res);
});

server.get('/reset', function (req, res, next) {
  search.reset();
  res.send(200);
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
