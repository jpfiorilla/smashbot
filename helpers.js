const ffmpeg = require('fluent-ffmpeg');
const promisify = require('es6-promisify');
const ffprobe = promisify(ffmpeg.ffprobe, {multiArgs: true});
const rp = require('request-promise');

const getInfo = function(location = 'static'){
    return ffprobe('./testVideos/' + `${location}.mp4`).then(meta => {
        let { width, height, duration, duration_ts, r_frame_rate } = meta[0].streams[0];
        return { width, height, duration, duration_ts, r_frame_rate };
    })
}
// getInfo().then(data => console.log(data))

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

module.exports = {
    getInfo
}