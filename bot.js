const rp = require('request-promise');
const cheerio = require('cheerio');


const getLink = function(){
    let crawlOptions = {
        uri: 'https://www.twitch.tv/directory/game/Super%20Smash%20Bros.%20Melee/clips'
        // transform: (body) => cheerio.load(body)
    }
    rp(crawlOptions).then(res => {
        console.log(res.includes('cn-card__title'));
    })
    // cn-card__title
}
getLink();