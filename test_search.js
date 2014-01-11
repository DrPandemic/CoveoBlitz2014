var Search = require('./search'),
    search = new Search(),
    _ = require('underscore'),
    docs = [
  'chat chat chat Explosion'
  , 'chien chien chat chien chien chien chien tentacules'
  , 'chien chat tentacules'
  , 'Mais Jesse que devrions nous faire?',
      'chat',
      'chien'
    ],
  currentId = 0;

start_test();

function start_test() {
  var names = ['rock', 'rock', '', '', '', '']
  for(var doc in docs) {
    search.index(fakeAlbum(docs[doc], names[doc]),'album',function() {
      console.log('indexed');
    })
  }

  var stdin = process.openStdin();
  stdin.on('data', function(chunk) {
    getInput(chunk.toString());
  });
}

function getInput(str) {
  str = str.replace(/\s+/g, '');
  console.log('results',JSON.stringify(search.query(fakeQueryMulty(str,1,[{metadataName:'name', values:['rock']}]))));
}

function fakeAlbum(doc, name){
  return {
    id:currentId++,
    text: doc,
    name : name,
    artists : [],
    release_date : '',
    genres: ['rock'],
    track_names : []
  }
}
function fakeArtist(doc){
  return {
    id:currentId++,
    text : doc,
    name : '',
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
function fakeQuery(doc,id,facets){
  return {queryTreeNodes:[{value : doc,type:'2',/*-1,-1,1*/}],rootID : id, facetFilters : facets};
}
function fakeQueryMulty(doc,id,facets) {
  return {queryTreeNodes:[{value : 'chat',type : '2'/*,-1,-1,1*/},{value : 'chien',type : '2'}],rootID : id, facetFilters : facets};
}
