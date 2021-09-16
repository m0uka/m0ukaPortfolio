const trackedItems = [ "2078529432", "1983122259", "1889557918", "1796629292", "1939959258" ]
import axios from 'axios'
const FormData = require('form-data')

let cachedData = {}

function fetchWorkshopData() {
    var bodyFormData = new FormData();
    bodyFormData.append('itemcount', trackedItems.length.toString())

    let i = 0
    trackedItems.forEach( (item) => {
        bodyFormData.append("publishedfileids[" + i + "]", item)
        i++
    })

    axios({
        method: 'post',
        url: 'https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/',
        data: bodyFormData,
        headers: { "Content-Type": `multipart/form-data; boundary=${bodyFormData._boundary}` },
    }).then(function (resp) {
        cachedData = resp.data.response.publishedfiledetails
    }).catch(function (err) {
        
    })
}


setInterval(fetchWorkshopData, 1000 * 60 * 5)
fetchWorkshopData()

export default {
    path: '/workshopstats',
    handler(req, res) {
        let data = 0
        cachedData.forEach( (x) => {
            data += x.lifetime_subscriptions
        } )

        res.end(data.toString())
    }
}