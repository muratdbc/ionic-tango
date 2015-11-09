angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array
  // var chats=[];

  // Some fake testing data
  // var chats = [{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'img/max.png'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'img/adam.jpg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'img/perry.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'img/mike.png'
  // }];
  var factory = {};

    factory.getEvents = function(){
     return $http({method: 'GET',url: 'http://localhost:3000/api/events'});
    };

    return factory;


  // return {
  //   all: function() {
  //     $http({
  //     method: 'GET',
  //     url: 'http://localhost:3000/api/events'
  //   }).then(function successCallback(response) {
  //     console.log(response.data)
  //       chats=response.data
  //     }, function errorCallback(response) {
  //       // called asynchronously if an error occurs
  //       // or server returns response with an error status.
  //     });
  //     return chats;
  //   },
  //   remove: function(chat) {
  //     chats.splice(chats.indexOf(chat), 1);
  //   },
  //   get: function(chatId) {
  //     for (var i = 0; i < chats.length; i++) {
  //       if (chats[i].id === parseInt(chatId)) {
  //         return chats[i];
  //       }
  //     }
  //     return null;
  //   }
  // };
});
