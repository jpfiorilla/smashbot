const rp = require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');
const promisify = require('es6-promisify');
const ffprobe = promisify(ffmpeg.ffprobe, {multiArgs: true});
const filters = require('./filters');

const getLink = function(){
    let crawlOptions = {
        uri: 'https://www.twitch.tv/directory/game/Super%20Smash%20Bros.%20Melee/clips'
        // transform: (body) => cheerio.load(body)
    }
    rp(crawlOptions).then(res => {
        console.log(res.includes('card__title'));
    })
    // cn-card__title
}
// getLink();

const getInfo = function(){
    // return ffmpeg.ffprobe('./videos/' + 'm2k.mp4', function(err, metadata) {
    //     console.dir(metadata.streams[0]);
    //     let { width, height, duration, duration_ts, r_frame_rate } = metadata.streams[0];
    //     return metadata.streams[0].width;
    // });
    return ffprobe('./videos/' + 'm2k.mp4').then(meta => {
        let { width, height, duration, duration_ts, r_frame_rate } = meta[0].streams;
        console.log(meta[0].streams);
        return { width, height, duration, duration_ts, r_frame_rate };
    })
}
// console.log(getInfo());

const checkVideo = function(){
    let videoFilters = [
            { filter: 'fade', options: 'in:0:60' }
        ];
    ffmpeg('./videos/' + 'm2k.mp4')
          .videoFilters(videoFilters)
          .save('test.mp4')
}
// checkVideo();

// log filters
ffmpeg.getAvailableFilters((err, filters) => {
    let f = JSON.stringify(filters, null, '\t')
    fs.writeFileSync('filtersList.txt', f, (err) => console.error(err))
});