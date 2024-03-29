angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('FriendIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})

// A simple controller that fetches a list of data from a service
.controller('MailboxIndexCtrl', function($scope, MessageService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.messages = MessageService.all();
})


// A simple controller that shows a tapped item's data
.controller('FriendDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

//A simple controller that shows a tapped item's data
.controller('MailboxDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
