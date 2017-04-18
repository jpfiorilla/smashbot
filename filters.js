const ffmpeg = require('fluent-ffmpeg');

let fade = function(start, end){
    return { filter: 'fade', options: `in:${start}:${end}` }
}

let aecho = function(delays = 250, decays = 0.3, in_gain = 0.6, out_gain = 0.3){
    return { filter: 'aecho', options: `${in_gain}:${out_gain}:${delays}:${decays}` };
}

let videoFilters = {
    fade
}

let audioFilters = {
    aecho
}

module.exports = { videoFilters, audioFilters };