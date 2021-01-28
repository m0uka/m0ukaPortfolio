const axios = require("axios");
const config = require("../config.json");

var Dashboard = {}

function performGetRequest(path) {
    var url = `https://voidstudios.dev/api/${path}`;
    var req = axios.get(url, { headers: { 'Authorization': `Bearer ${config.dashboard_apikey}` } })
    .catch(err => {
        console.log("Couldn't perform GET request: " + err);
    })
    return req
}

function GetUserAddons(sid) {
    return performGetRequest(`user/${sid}/addons`);
}

Dashboard.GetUserAddons = GetUserAddons;

module.exports = Dashboard;
