const ffmpeg = require('fluent-ffmpeg');

let fade = function(start, end){
    return { filter: 'fade', options: `in:${start}:${end}` }
}

let aecho = function(delays = 250, decays = 0.3, in_gain = 0.6, out_gain = 0.3){
    return { filter: 'aecho', options: `${in_gain}:${out_gain}:${delays}:${decays}` };
}
let afade = function(type = 'in', start_time = 0, duration = 1, curve){
    let options = '', curveTypes = ['tri', 'qsin', 'hsin', 'esin', 'log', 'ipar', 'qua', 'cub', 'squ', 'cbr', 'par', 'exp', 'iqsin', 'ihsin', 'dese', 'desi'];
    if (!curve) curve = curveTypes[Math.floor(Math.random() * curveTypes.length)];
    options = `t=${type}:st=${start_time}:d=${duration}:curve=${curve}`;
    return { filter: 'afade', options }
}

let videoFilters = {
    fade
}

let audioFilters = {
    aecho,
    afade
}

module.exports = { videoFilters, audioFilters };