//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
ttypes.DocumentType = {
'ARTIST' : 1,
'ALBUM' : 2
};
ttypes.NodeType = {
'OPERATOR' : 1,
'LITERAL' : 2
};
Artist = module.exports.Artist = function(args) {
  this.id = null;
  this.name = null;
  this.origin = null;
  this.active_start = null;
  this.active_end = null;
  this.genres = null;
  this.labels = null;
  this.albums = null;
  this.group_names = null;
  this.instruments_played = null;
  this.text = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.origin !== undefined) {
      this.origin = args.origin;
    }
    if (args.active_start !== undefined) {
      this.active_start = args.active_start;
    }
    if (args.active_end !== undefined) {
      this.active_end = args.active_end;
    }
    if (args.genres !== undefined) {
      this.genres = args.genres;
    }
    if (args.labels !== undefined) {
      this.labels = args.labels;
    }
    if (args.albums !== undefined) {
      this.albums = args.albums;
    }
    if (args.group_names !== undefined) {
      this.group_names = args.group_names;
    }
    if (args.instruments_played !== undefined) {
      this.instruments_played = args.instruments_played;
    }
    if (args.text !== undefined) {
      this.text = args.text;
    }
  }
};
Artist.prototype = {};
Artist.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.name = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.name.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.SET) {
        var _size7 = 0;
        var _rtmp311;
        this.origin = [];
        var _etype10 = 0;
        _rtmp311 = input.readSetBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = input.readString();
          this.origin.push(elem13);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.SET) {
        var _size14 = 0;
        var _rtmp318;
        this.active_start = [];
        var _etype17 = 0;
        _rtmp318 = input.readSetBegin();
        _etype17 = _rtmp318.etype;
        _size14 = _rtmp318.size;
        for (var _i19 = 0; _i19 < _size14; ++_i19)
        {
          var elem20 = null;
          elem20 = input.readString();
          this.active_start.push(elem20);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size21 = 0;
        var _rtmp325;
        this.active_end = [];
        var _etype24 = 0;
        _rtmp325 = input.readSetBegin();
        _etype24 = _rtmp325.etype;
        _size21 = _rtmp325.size;
        for (var _i26 = 0; _i26 < _size21; ++_i26)
        {
          var elem27 = null;
          elem27 = input.readString();
          this.active_end.push(elem27);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.SET) {
        var _size28 = 0;
        var _rtmp332;
        this.genres = [];
        var _etype31 = 0;
        _rtmp332 = input.readSetBegin();
        _etype31 = _rtmp332.etype;
        _size28 = _rtmp332.size;
        for (var _i33 = 0; _i33 < _size28; ++_i33)
        {
          var elem34 = null;
          elem34 = input.readString();
          this.genres.push(elem34);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.SET) {
        var _size35 = 0;
        var _rtmp339;
        this.labels = [];
        var _etype38 = 0;
        _rtmp339 = input.readSetBegin();
        _etype38 = _rtmp339.etype;
        _size35 = _rtmp339.size;
        for (var _i40 = 0; _i40 < _size35; ++_i40)
        {
          var elem41 = null;
          elem41 = input.readString();
          this.labels.push(elem41);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.SET) {
        var _size42 = 0;
        var _rtmp346;
        this.albums = [];
        var _etype45 = 0;
        _rtmp346 = input.readSetBegin();
        _etype45 = _rtmp346.etype;
        _size42 = _rtmp346.size;
        for (var _i47 = 0; _i47 < _size42; ++_i47)
        {
          var elem48 = null;
          elem48 = input.readString();
          this.albums.push(elem48);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.SET) {
        var _size49 = 0;
        var _rtmp353;
        this.group_names = [];
        var _etype52 = 0;
        _rtmp353 = input.readSetBegin();
        _etype52 = _rtmp353.etype;
        _size49 = _rtmp353.size;
        for (var _i54 = 0; _i54 < _size49; ++_i54)
        {
          var elem55 = null;
          elem55 = input.readString();
          this.group_names.push(elem55);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.SET) {
        var _size56 = 0;
        var _rtmp360;
        this.instruments_played = [];
        var _etype59 = 0;
        _rtmp360 = input.readSetBegin();
        _etype59 = _rtmp360.etype;
        _size56 = _rtmp360.size;
        for (var _i61 = 0; _i61 < _size56; ++_i61)
        {
          var elem62 = null;
          elem62 = input.readString();
          this.instruments_played.push(elem62);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Artist.prototype.write = function(output) {
  output.writeStructBegin('Artist');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.SET, 2);
    output.writeSetBegin(Thrift.Type.STRING, this.name.length);
    for (var iter63 in this.name)
    {
      if (this.name.hasOwnProperty(iter63))
      {
        iter63 = this.name[iter63];
        output.writeString(iter63);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.origin !== null && this.origin !== undefined) {
    output.writeFieldBegin('origin', Thrift.Type.SET, 3);
    output.writeSetBegin(Thrift.Type.STRING, this.origin.length);
    for (var iter64 in this.origin)
    {
      if (this.origin.hasOwnProperty(iter64))
      {
        iter64 = this.origin[iter64];
        output.writeString(iter64);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.active_start !== null && this.active_start !== undefined) {
    output.writeFieldBegin('active_start', Thrift.Type.SET, 4);
    output.writeSetBegin(Thrift.Type.STRING, this.active_start.length);
    for (var iter65 in this.active_start)
    {
      if (this.active_start.hasOwnProperty(iter65))
      {
        iter65 = this.active_start[iter65];
        output.writeString(iter65);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.active_end !== null && this.active_end !== undefined) {
    output.writeFieldBegin('active_end', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRING, this.active_end.length);
    for (var iter66 in this.active_end)
    {
      if (this.active_end.hasOwnProperty(iter66))
      {
        iter66 = this.active_end[iter66];
        output.writeString(iter66);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.genres !== null && this.genres !== undefined) {
    output.writeFieldBegin('genres', Thrift.Type.SET, 6);
    output.writeSetBegin(Thrift.Type.STRING, this.genres.length);
    for (var iter67 in this.genres)
    {
      if (this.genres.hasOwnProperty(iter67))
      {
        iter67 = this.genres[iter67];
        output.writeString(iter67);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.labels !== null && this.labels !== undefined) {
    output.writeFieldBegin('labels', Thrift.Type.SET, 7);
    output.writeSetBegin(Thrift.Type.STRING, this.labels.length);
    for (var iter68 in this.labels)
    {
      if (this.labels.hasOwnProperty(iter68))
      {
        iter68 = this.labels[iter68];
        output.writeString(iter68);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.albums !== null && this.albums !== undefined) {
    output.writeFieldBegin('albums', Thrift.Type.SET, 8);
    output.writeSetBegin(Thrift.Type.STRING, this.albums.length);
    for (var iter69 in this.albums)
    {
      if (this.albums.hasOwnProperty(iter69))
      {
        iter69 = this.albums[iter69];
        output.writeString(iter69);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.group_names !== null && this.group_names !== undefined) {
    output.writeFieldBegin('group_names', Thrift.Type.SET, 9);
    output.writeSetBegin(Thrift.Type.STRING, this.group_names.length);
    for (var iter70 in this.group_names)
    {
      if (this.group_names.hasOwnProperty(iter70))
      {
        iter70 = this.group_names[iter70];
        output.writeString(iter70);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.instruments_played !== null && this.instruments_played !== undefined) {
    output.writeFieldBegin('instruments_played', Thrift.Type.SET, 10);
    output.writeSetBegin(Thrift.Type.STRING, this.instruments_played.length);
    for (var iter71 in this.instruments_played)
    {
      if (this.instruments_played.hasOwnProperty(iter71))
      {
        iter71 = this.instruments_played[iter71];
        output.writeString(iter71);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 11);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Album = module.exports.Album = function(args) {
  this.id = null;
  this.name = null;
  this.artists = null;
  this.release_date = null;
  this.genres = null;
  this.track_names = null;
  this.text = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.artists !== undefined) {
      this.artists = args.artists;
    }
    if (args.release_date !== undefined) {
      this.release_date = args.release_date;
    }
    if (args.genres !== undefined) {
      this.genres = args.genres;
    }
    if (args.track_names !== undefined) {
      this.track_names = args.track_names;
    }
    if (args.text !== undefined) {
      this.text = args.text;
    }
  }
};
Album.prototype = {};
Album.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.SET) {
        var _size72 = 0;
        var _rtmp376;
        this.name = [];
        var _etype75 = 0;
        _rtmp376 = input.readSetBegin();
        _etype75 = _rtmp376.etype;
        _size72 = _rtmp376.size;
        for (var _i77 = 0; _i77 < _size72; ++_i77)
        {
          var elem78 = null;
          elem78 = input.readString();
          this.name.push(elem78);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.SET) {
        var _size79 = 0;
        var _rtmp383;
        this.artists = [];
        var _etype82 = 0;
        _rtmp383 = input.readSetBegin();
        _etype82 = _rtmp383.etype;
        _size79 = _rtmp383.size;
        for (var _i84 = 0; _i84 < _size79; ++_i84)
        {
          var elem85 = null;
          elem85 = input.readString();
          this.artists.push(elem85);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.SET) {
        var _size86 = 0;
        var _rtmp390;
        this.release_date = [];
        var _etype89 = 0;
        _rtmp390 = input.readSetBegin();
        _etype89 = _rtmp390.etype;
        _size86 = _rtmp390.size;
        for (var _i91 = 0; _i91 < _size86; ++_i91)
        {
          var elem92 = null;
          elem92 = input.readString();
          this.release_date.push(elem92);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size93 = 0;
        var _rtmp397;
        this.genres = [];
        var _etype96 = 0;
        _rtmp397 = input.readSetBegin();
        _etype96 = _rtmp397.etype;
        _size93 = _rtmp397.size;
        for (var _i98 = 0; _i98 < _size93; ++_i98)
        {
          var elem99 = null;
          elem99 = input.readString();
          this.genres.push(elem99);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.SET) {
        var _size100 = 0;
        var _rtmp3104;
        this.track_names = [];
        var _etype103 = 0;
        _rtmp3104 = input.readSetBegin();
        _etype103 = _rtmp3104.etype;
        _size100 = _rtmp3104.size;
        for (var _i105 = 0; _i105 < _size100; ++_i105)
        {
          var elem106 = null;
          elem106 = input.readString();
          this.track_names.push(elem106);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Album.prototype.write = function(output) {
  output.writeStructBegin('Album');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.SET, 2);
    output.writeSetBegin(Thrift.Type.STRING, this.name.length);
    for (var iter107 in this.name)
    {
      if (this.name.hasOwnProperty(iter107))
      {
        iter107 = this.name[iter107];
        output.writeString(iter107);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.artists !== null && this.artists !== undefined) {
    output.writeFieldBegin('artists', Thrift.Type.SET, 3);
    output.writeSetBegin(Thrift.Type.STRING, this.artists.length);
    for (var iter108 in this.artists)
    {
      if (this.artists.hasOwnProperty(iter108))
      {
        iter108 = this.artists[iter108];
        output.writeString(iter108);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.release_date !== null && this.release_date !== undefined) {
    output.writeFieldBegin('release_date', Thrift.Type.SET, 4);
    output.writeSetBegin(Thrift.Type.STRING, this.release_date.length);
    for (var iter109 in this.release_date)
    {
      if (this.release_date.hasOwnProperty(iter109))
      {
        iter109 = this.release_date[iter109];
        output.writeString(iter109);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.genres !== null && this.genres !== undefined) {
    output.writeFieldBegin('genres', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRING, this.genres.length);
    for (var iter110 in this.genres)
    {
      if (this.genres.hasOwnProperty(iter110))
      {
        iter110 = this.genres[iter110];
        output.writeString(iter110);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.track_names !== null && this.track_names !== undefined) {
    output.writeFieldBegin('track_names', Thrift.Type.SET, 6);
    output.writeSetBegin(Thrift.Type.STRING, this.track_names.length);
    for (var iter111 in this.track_names)
    {
      if (this.track_names.hasOwnProperty(iter111))
      {
        iter111 = this.track_names[iter111];
        output.writeString(iter111);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 7);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FacetFilter = module.exports.FacetFilter = function(args) {
  this.metadataName = null;
  this.values = null;
  if (args) {
    if (args.metadataName !== undefined) {
      this.metadataName = args.metadataName;
    }
    if (args.values !== undefined) {
      this.values = args.values;
    }
  }
};
FacetFilter.prototype = {};
FacetFilter.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.metadataName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size112 = 0;
        var _rtmp3116;
        this.values = [];
        var _etype115 = 0;
        _rtmp3116 = input.readListBegin();
        _etype115 = _rtmp3116.etype;
        _size112 = _rtmp3116.size;
        for (var _i117 = 0; _i117 < _size112; ++_i117)
        {
          var elem118 = null;
          elem118 = input.readString();
          this.values.push(elem118);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FacetFilter.prototype.write = function(output) {
  output.writeStructBegin('FacetFilter');
  if (this.metadataName !== null && this.metadataName !== undefined) {
    output.writeFieldBegin('metadataName', Thrift.Type.STRING, 1);
    output.writeString(this.metadataName);
    output.writeFieldEnd();
  }
  if (this.values !== null && this.values !== undefined) {
    output.writeFieldBegin('values', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.values.length);
    for (var iter119 in this.values)
    {
      if (this.values.hasOwnProperty(iter119))
      {
        iter119 = this.values[iter119];
        output.writeString(iter119);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryTreeNode = module.exports.QueryTreeNode = function(args) {
  this.value = null;
  this.type = null;
  this.leftPart = null;
  this.rightPart = null;
  this.id = null;
  if (args) {
    if (args.value !== undefined) {
      this.value = args.value;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.leftPart !== undefined) {
      this.leftPart = args.leftPart;
    }
    if (args.rightPart !== undefined) {
      this.rightPart = args.rightPart;
    }
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
QueryTreeNode.prototype = {};
QueryTreeNode.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.leftPart = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.rightPart = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryTreeNode.prototype.write = function(output) {
  output.writeStructBegin('QueryTreeNode');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 2);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.leftPart !== null && this.leftPart !== undefined) {
    output.writeFieldBegin('leftPart', Thrift.Type.I32, 3);
    output.writeI32(this.leftPart);
    output.writeFieldEnd();
  }
  if (this.rightPart !== null && this.rightPart !== undefined) {
    output.writeFieldBegin('rightPart', Thrift.Type.I32, 4);
    output.writeI32(this.rightPart);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 5);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Query = module.exports.Query = function(args) {
  this.rootId = null;
  this.queryTreeNodes = null;
  this.facetFilters = null;
  if (args) {
    if (args.rootId !== undefined) {
      this.rootId = args.rootId;
    }
    if (args.queryTreeNodes !== undefined) {
      this.queryTreeNodes = args.queryTreeNodes;
    }
    if (args.facetFilters !== undefined) {
      this.facetFilters = args.facetFilters;
    }
  }
};
Query.prototype = {};
Query.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.rootId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size120 = 0;
        var _rtmp3124;
        this.queryTreeNodes = [];
        var _etype123 = 0;
        _rtmp3124 = input.readListBegin();
        _etype123 = _rtmp3124.etype;
        _size120 = _rtmp3124.size;
        for (var _i125 = 0; _i125 < _size120; ++_i125)
        {
          var elem126 = null;
          elem126 = new ttypes.QueryTreeNode();
          elem126.read(input);
          this.queryTreeNodes.push(elem126);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size127 = 0;
        var _rtmp3131;
        this.facetFilters = [];
        var _etype130 = 0;
        _rtmp3131 = input.readListBegin();
        _etype130 = _rtmp3131.etype;
        _size127 = _rtmp3131.size;
        for (var _i132 = 0; _i132 < _size127; ++_i132)
        {
          var elem133 = null;
          elem133 = new ttypes.FacetFilter();
          elem133.read(input);
          this.facetFilters.push(elem133);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Query.prototype.write = function(output) {
  output.writeStructBegin('Query');
  if (this.rootId !== null && this.rootId !== undefined) {
    output.writeFieldBegin('rootId', Thrift.Type.I32, 1);
    output.writeI32(this.rootId);
    output.writeFieldEnd();
  }
  if (this.queryTreeNodes !== null && this.queryTreeNodes !== undefined) {
    output.writeFieldBegin('queryTreeNodes', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.queryTreeNodes.length);
    for (var iter134 in this.queryTreeNodes)
    {
      if (this.queryTreeNodes.hasOwnProperty(iter134))
      {
        iter134 = this.queryTreeNodes[iter134];
        iter134.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.facetFilters !== null && this.facetFilters !== undefined) {
    output.writeFieldBegin('facetFilters', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.facetFilters.length);
    for (var iter135 in this.facetFilters)
    {
      if (this.facetFilters.hasOwnProperty(iter135))
      {
        iter135 = this.facetFilters[iter135];
        iter135.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryResult = module.exports.QueryResult = function(args) {
  this.documentType = null;
  this.id = null;
  if (args) {
    if (args.documentType !== undefined) {
      this.documentType = args.documentType;
    }
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
QueryResult.prototype = {};
QueryResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.documentType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryResult.prototype.write = function(output) {
  output.writeStructBegin('QueryResult');
  if (this.documentType !== null && this.documentType !== undefined) {
    output.writeFieldBegin('documentType', Thrift.Type.I32, 1);
    output.writeI32(this.documentType);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 2);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FacetValue = module.exports.FacetValue = function(args) {
  this.value = null;
  this.count = null;
  if (args) {
    if (args.value !== undefined) {
      this.value = args.value;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
  }
};
FacetValue.prototype = {};
FacetValue.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FacetValue.prototype.write = function(output) {
  output.writeStructBegin('FacetValue');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 2);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FacetResult = module.exports.FacetResult = function(args) {
  this.metadataName = null;
  this.values = null;
  if (args) {
    if (args.metadataName !== undefined) {
      this.metadataName = args.metadataName;
    }
    if (args.values !== undefined) {
      this.values = args.values;
    }
  }
};
FacetResult.prototype = {};
FacetResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.metadataName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size136 = 0;
        var _rtmp3140;
        this.values = [];
        var _etype139 = 0;
        _rtmp3140 = input.readListBegin();
        _etype139 = _rtmp3140.etype;
        _size136 = _rtmp3140.size;
        for (var _i141 = 0; _i141 < _size136; ++_i141)
        {
          var elem142 = null;
          elem142 = new ttypes.FacetValue();
          elem142.read(input);
          this.values.push(elem142);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FacetResult.prototype.write = function(output) {
  output.writeStructBegin('FacetResult');
  if (this.metadataName !== null && this.metadataName !== undefined) {
    output.writeFieldBegin('metadataName', Thrift.Type.STRING, 1);
    output.writeString(this.metadataName);
    output.writeFieldEnd();
  }
  if (this.values !== null && this.values !== undefined) {
    output.writeFieldBegin('values', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.values.length);
    for (var iter143 in this.values)
    {
      if (this.values.hasOwnProperty(iter143))
      {
        iter143 = this.values[iter143];
        iter143.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryResponse = module.exports.QueryResponse = function(args) {
  this.facets = null;
  this.results = null;
  if (args) {
    if (args.facets !== undefined) {
      this.facets = args.facets;
    }
    if (args.results !== undefined) {
      this.results = args.results;
    }
  }
};
QueryResponse.prototype = {};
QueryResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size144 = 0;
        var _rtmp3148;
        this.facets = [];
        var _etype147 = 0;
        _rtmp3148 = input.readListBegin();
        _etype147 = _rtmp3148.etype;
        _size144 = _rtmp3148.size;
        for (var _i149 = 0; _i149 < _size144; ++_i149)
        {
          var elem150 = null;
          elem150 = new ttypes.FacetResult();
          elem150.read(input);
          this.facets.push(elem150);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size151 = 0;
        var _rtmp3155;
        this.results = [];
        var _etype154 = 0;
        _rtmp3155 = input.readListBegin();
        _etype154 = _rtmp3155.etype;
        _size151 = _rtmp3155.size;
        for (var _i156 = 0; _i156 < _size151; ++_i156)
        {
          var elem157 = null;
          elem157 = new ttypes.QueryResult();
          elem157.read(input);
          this.results.push(elem157);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryResponse.prototype.write = function(output) {
  output.writeStructBegin('QueryResponse');
  if (this.facets !== null && this.facets !== undefined) {
    output.writeFieldBegin('facets', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.facets.length);
    for (var iter158 in this.facets)
    {
      if (this.facets.hasOwnProperty(iter158))
      {
        iter158 = this.facets[iter158];
        iter158.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.results !== null && this.results !== undefined) {
    output.writeFieldBegin('results', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.results.length);
    for (var iter159 in this.results)
    {
      if (this.results.hasOwnProperty(iter159))
      {
        iter159 = this.results[iter159];
        iter159.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

