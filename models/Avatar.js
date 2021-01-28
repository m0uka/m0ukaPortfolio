const steam = require("steam-web");
const config = require("../config.json");

var s = new steam({
    apiKey: config.steam_apikey,
    format: 'json'
});

var Avatar = {};
var CachedAvatar = null;

function getPlayerSummaries(steamid) {
    return new Promise((resolve, reject) => {
        s.getPlayerSummaries({
            steamids: [steamid],
            callback: function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.response.players[0]);
                }    
            }
        })
    })
}

async function GetAvatar(steamid) {
    var player = await getPlayerSummaries(steamid);
    return player.avatarfull;
}

async function precacheAvatar() {
    CachedAvatar = await GetAvatar(config.steamid);
}
precacheAvatar();


function GetCachedAvatar() {
    return CachedAvatar;
}

Avatar.GetAvatar = GetAvatar;
Avatar.GetCachedAvatar = GetCachedAvatar;

module.exports = Avatar;