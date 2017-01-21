angular.module('snowApp', [])
       .controller ('snowController', snowFunction);

snowFunction.$inject = ['$http']

function snowFunction($http) {
  var snowCtrl = this;

  snowCtrl.title = 'Project Snowshoe'

    snowCtrl.currently=[];
    snowCtrl.weather=[];

    snowCtrl.getWeather = function () {
    var APIKEY =process.env.APIKEY
    var url ='https://api.darksky.net/forecast/'+APIKEY+'/39.8472,-105.9117'
    console.log("looking for", snowCtrl.currently, "at", url);
    $http.get(url)
        .then(function success(response) {
            console.log(response.data)
            snowCtrl.currently = response.data.currently
            snowCtrl.weather = response.data.hourly
            snowCtrl.daily = response.data.daily.data[0]
            snowCtrl.avalanche = response.data.alerts[0]

        },
        function failure(response) {
            console.log("ERROR", response)
        })
      };

     snowCtrl.getSnow = function () {
        var ID = process.env.ID
        var APIKEY2 = process.env.APIKEY2
        var url = 'https://api.weatherunlocked.com/api/snowreport/303010?app_id='+ID+'&app_key='+APIKEY2
        console.log("making http request")
        $http.get(url)
            .then(function (response) {
                console.log(response.data)
                snowCtrl.snow = response.data
                console.log(snowCtrl.snow)

            },
            function failure(response) {
                console.log("ERROR", response)
            })
          }
}
