const fs = require('fs');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');

const filters = require('./filters');
const { getInfo } = require('./helpers');

getInfo('static').then(data => console.log(data))

const filterVideo = function(){
    let v = filters.videoFilters, a = filters.audioFilters;
    let audioFilters = [
        // filters.audioFilters.aecho()
        a.afade()
    ]
    let videoFilters = [
            // { filter: 'fade', options: 'in:0:60' }
        ];
    ffmpeg('./testVideos/' + 'static.mp4')
          .audioFilters(audioFilters)
        //   .videoFilters(videoFilters)
          .save('test.mp4')
}
// filterVideo()

// log filters
// ffmpeg.getAvailableFilters((err, filters) => {
//     let f = JSON.stringify(filters, null, '\t')
//     fs.writeFileSync('filtersList.txt', f, (err) => console.error(err))
// });