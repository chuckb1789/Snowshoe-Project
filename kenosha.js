angular.module('snowApp', [])
       .controller ('snowController', snowFunction);

snowFunction.$inject = ['$http']

function snowFunction($http) {
  var snowCtrl = this;

  snowCtrl.title = 'Project Snowshoe'

    snowCtrl.currently=[];
    snowCtrl.weather=[];

    snowCtrl.getWeather = function () {
    var url ='http://www.projectsnowshoe.com/forecast/39.4133,-105.7567'
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

    //  snowCtrl.getSnow = function () {
        // var ID = process.env.ID
        // var APIKEY2 = process.env.APIKEY2
        // var url = 'https://api.weatherunlocked.com/api/snowreport/303007?app_id='+ID+'&app_key='+APIKEY2
        // console.log("making http request")
        // $http.get(url)
        //     .then(function (response) {
        //         console.log(response.data)
        //         snowCtrl.snow = response.data
        //         console.log(snowCtrl.snow)
        //
        //     },
        //     function failure(response) {
        //         console.log("ERROR", response)
        //     })
        //   }
        snowCtrl.getSnow = function () {
           snowCtrl.snow = ""
         }
}
