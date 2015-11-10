angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('DashCtrl',function($scope,Chats){
    $scope.chats = [];

    var handleSuccess = function(data, status) {
        $scope.chats = data;
        console.log($scope.chats);
    };
    Chats.getEvents().success(handleSuccess);
    //date picker
    $scope.datepickerObject = {
      titleLabel: 'Title',  //Optional
      todayLabel: 'Today',  //Optional
      closeLabel: 'Close',  //Optional
      setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',  //Optional
      todayButtonType : 'button-assertive',  //Optional
      closeButtonType : 'button-assertive',  //Optional
      inputDate: new Date(),  //Optional
      mondayFirst: true,  //Optional
      disabledDates: disabledDates, //Optional
      weekDaysList: weekDaysList, //Optional
      monthList: monthList, //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional
      from: new Date(2012, 8, 2), //Optional
      to: new Date(2018, 8, 25),  //Optional
      callback: function (val) {  //Mandatory
        datePickerCallback(val);
      },
      dateFormat: 'dd-MM-yyyy', //Optional
      closeOnSelect: false, //Optional
    };
    var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];
    var datePickerCallback = function (val) {
      if (typeof(val) === 'undefined') {
        console.log('No date selected');
      } else {
        console.log('Selected date is : ', val)
        //set the date to the selected date
        $scope.datepickerObject.inputDate=val;
      }
    };
    var disabledDates = [];
    // console.log($scope.datepickerObject.inputDate)

})
.controller('ChatsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.7833, -122.4167);


        var mapOptions = {
            center: myLatlng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // debugger
        // geocoding sometimes does not work
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

