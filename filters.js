const ffmpeg = require('fluent-ffmpeg');

let fade = function(start, end){
    return { filter: 'fade', options: `in:${start}:${end}` }
}

module.exports = {
    fade
}