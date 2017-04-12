const rp = require('request-promise');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');

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

const checkVideo = function(){
    let videoFilters = [{filter: 'fade', options: ['in', 0, 60]}];
    let command = ffmpeg('./videos/' + 'm2k.mp4')
                        .videoFilters(videoFilters)
                        // .save('test.mp4')
}
checkVideo();