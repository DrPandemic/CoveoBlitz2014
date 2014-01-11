function benchjs() {
  this.startTime = {};
  this.benchmarkDuration = {};
  this.silence = false;
}
benchjs.prototype.start = function(id) {
  this.startTime[id] = process.hrtime();
}
benchjs.prototype.stop = function(id,silent) {
  //If not started -> do nothing
  if(this.startTime[id] !== undefined) {
    var diff = process.hrtime(this.startTime[id]);
    var diffNano = diff[0] * 1e9 + diff[1];
    //Add the duration in the hashmap
    if(this.benchmarkDuration[id] !== undefined) {
      this.benchmarkDuration[id].push(diffNano);
    } else {
      this.benchmarkDuration[id] = [diffNano];
    }

    if((silent === undefined || (silent !== undefined && silent === false)) && !this.silence) {
      console.log('Benchmark', id, 'took', diffNano, 'nanoseconds');
    }

    delete this.startTime[id];
  }
}
function calculateStats(benchmarkDuration,id) {
  var tmp = {};
  if(benchmarkDuration[id] !== undefined) {
    tmp.times = benchmarkDuration[id];
    tmp.average = 0;
    tmp.min = tmp.times[0];
    tmp.max = tmp.times[0];
    for(var item in tmp.times){
      tmp.average += tmp.times[item];
      if(tmp.times[item] < tmp.min) {
        tmp.min = tmp.times[item];
      }
      if(tmp.times[item] > tmp.max) {
        tmp.max = tmp.times[item];
      }
    }
    tmp.total = tmp.average;
    tmp.average /= tmp.times.length;


    delete benchmarkDuration[id];
  }
  return tmp;
}
benchjs.prototype.done = function(id) {
  var tmp = calculateStats(this.benchmarkDuration,id);
  if(tmp.average !== undefined) {
    console.log('Benchmark',id,'--- Average :',Math.ceil(tmp.average),'nano (',Math.ceil(tmp.average).toString().length, 'digits ). Min :',tmp.min,'nano. Max :',tmp.max,'nano. Total :',tmp.total/1e9,'seconds for',tmp.times.length,'runs.');

  }


}
benchjs.prototype.bench = function(callback,n,name) {
  if(!n || n < 0) n = 100;
  this.silence = true;

  for(var i = 0; i < n; ++i) {
    this.start(name);
    callback();

    this.stop(name);
  }

  this.done(name);
  this.silence = false;

}
benchjs.prototype.compare = function(callback1,callback2,n) {
  if(!n || n < 0) n = 100;
  //this.silence = true;

  for(var i = 0; i < n; ++i) {
    this.start('__bench1');
    callback1();
    this.stop('__bench1');
  }
  var tmp1 = calculateStats(this.benchmarkDuration,'__bench1');

  for(var i = 0; i < n; ++i) {
    this.start('__bench2');
    callback2();
    this.stop('__bench2');
  }
  var tmp2 = calculateStats(this.benchmarkDuration,'__bench2');

  console.log('----Results----');
  var averageFast = tmp1.average < tmp2.average ? tmp1.average : tmp2.average;
  var averageSlow = tmp1.average > tmp2.average ? tmp1.average : tmp2.average;
  var averagePercent =  (1 - averageFast / averageSlow) * 100;
  averageFast /= 1e6;

  var minFast = tmp1.min < tmp2.min ? tmp1.min : tmp2.min;
  var minSlow = tmp1.min > tmp2.min ? tmp1.min : tmp2.min;
  var minPercent =  (1 - minFast / minSlow) * 100;
  minFast /= 1e6;

  var maxFast = tmp1.max < tmp2.max ? tmp1.max : tmp2.max;
  var maxSlow = tmp1.max > tmp2.max ? tmp1.max : tmp2.max;
  var maxPercent =  (1 - maxFast / maxSlow) * 100;
  maxFast /= 1e6;

  var totalFast = tmp1.total < tmp2.total ? tmp1.total : tmp2.total;
  var totalSlow = tmp1.total > tmp2.total ? tmp1.total : tmp2.total;
  var totalPercent =  (1 - totalFast / totalSlow) * 100;
  totalFast /= 1e6;

  console.log('Lowest average :',(tmp1.average < tmp2.average ? 'First benchmark' : 'Second benchmark'),'with',averageFast,'milliseconds, which is',averagePercent,'% fastest.');
  console.log('Lowest min :',(tmp1.min < tmp2.min ? 'First benchmark' : 'Second benchmark'),'with',minFast,'milliseconds, which is',minPercent,'% fastest.');
  console.log('Lowest max :',(tmp1.max < tmp2.max ? 'First benchmark' : 'Second benchmark'),'with',maxFast,'milliseconds, which is',maxPercent,'% fastest.');
  console.log('Lowest total :',(tmp1.total < tmp2.total ? 'First benchmark' : 'Second benchmark'),'with',totalFast,'milliseconds, which is',totalPercent,'% fastest.');

  this.silence = false;
}

function init() {
  return new benchjs();
}

module.exports = init();