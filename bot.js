const fs = require('fs');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');

const { v, a } = require('./filters');
const { getInfo } = require('./helpers');

// getInfo('static').then(data => console.log(data))

const filterVideo = function(){
    let audioFilters = [
        // a.aecho()
        a.afade()
    ]
    let videoFilters = [
            // { filter: 'fade', options: 'in:0:60' }
            // v.fade()
            v.avgblur()
        ];
    // let video = './testVideos/' + 'static.mp4';
    let video = './videos/' + 'm2k.mp4'
    ffmpeg(video)
        //   .audioFilters(audioFilters)
          .videoFilters(videoFilters)
          .save('test.mp4')
}
filterVideo()

// log filters
// ffmpeg.getAvailableFilters((err, filters) => {
//     let f = JSON.stringify(filters, null, '\t')
//     fs.writeFileSync('filtersList.txt', f, (err) => console.error(err))
// });