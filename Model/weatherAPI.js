// module.export = {
//
// app.get('/', function (req, res) {
//     // request(URL, callback) takes the parameters for the API URL and a callback function
//     // this API call will return result=[{album, track, lyrics}...]
//     request('https://api.darksky.net/forecast/'+process.env.APIKEY+'/38.911024,-107.031255', function (err, response, body) {
//         var parseBody = JSON.parse(body)
//         // response.result is an array of objects with {album, title, lyrics}
//         // map the list of albums to be a list of album titles
//         var weather = parseBody.result.map
//         })
//         console.log(weather);
//
//     })
// };
