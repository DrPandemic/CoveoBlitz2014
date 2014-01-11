var Search = require('./search'),
    search = new Search(),
    _ = require('underscore'),
    docs = [
  'chat chat chat Explosion'
  , 'chien chien chat chien chien chien chien tentacules'
  , 'chien chat tentacules'
  , 'Mais Jesse que devrions nous faire?'
];

search.index({text: 'Test'});
search.query('yolo');

start_test();

function start_test() {
  for(var doc in docs) {
    search.index(fakeAlbum(docs[doc]),'album',function() {
      console.log('indexed');
    })
  }

  var stdin = process.openStdin();
  stdin.on('data', function(chunk) {
    getInput(chunk.toString());
  });
}

function getInput(str) {
  search.query(1,fakeQuery('chat'))
}

function fakeAlbum(doc){
  return {
    name : doc,
    artists : [],
    release_date : '',
    genres: [],
    track_names : []
  }
}
function fakeArtist(doc){
  return {
    name : doc,
    origin : '',
    active_start : '',
    active_end : '',
    genres : [],
    labels : [],
    albums: [],
    group_names : [],
    instruments_played : []
  }
}
function fakeQuery(doc){
  return [[doc,'OPERATOR',-1,-1,1]];

}