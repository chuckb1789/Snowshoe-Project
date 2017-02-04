angular.module('snowApp', [])
       .controller ('snowController', snowFunction);

snowFunction.$inject = ['$http']

function snowFunction($http) {
  var snowCtrl = this;

  snowCtrl.title = 'Project Snowshoe'

    snowCtrl.currently=[];
    snowCtrl.weather=[];

    snowCtrl.getWeather = function () {
     var url =window.location.protocol+'//'+window.location.host+'/forecast/38.911024,-107.031255'
     console.log("looking for", snowCtrl.currently, "at", url);
     $http.get(url)
         .then(function success(response) {
             console.log(response.data)
             if (response.data.currently){
             snowCtrl.currently = response.data.currently} else {snowCtrl.currently=''}
             if (response.data.hourly){snowCtrl.weather = response.data.hourly} else {snowCtrl.weather = ''}
             snowCtrl.daily = response.data.daily.data[0]
             if (response.data.alerts){snowCtrl.avalanche = response.data.alerts[0]} else {snowCtrl.avalanche=''}

         },
         function failure(response) {
             console.log("ERROR", response)
         })
       };

    //  snowCtrl.getSnow = function () {
        // var ID = process.env.ID
        // var APIKEY2 = process.env.APIKEY2
        // var url = 'https://api.weatherunlocked.com/api/snowreport/303010?app_id='+ID+'&app_key='+APAPIKEY2
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
