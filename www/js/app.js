// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.mailbox-index', {
      url: '/mailbox',
      views: {
        'mailbox-tab': {
          templateUrl: 'templates/mailbox-index.html',
          controller: 'MailboxIndexCtrl'
        }
      }
    })
    
    .state('tab.mailbox-detail', {
      url: '/mailbox/:petId',
      views: {
        'mailbox-tab': {
          templateUrl: 'templates/mailbox-detail.html',
          controller: 'MailboxDetailCtrl'
        }
      }
    })
    
    .state('tab.friends-index', {
      url: '/friends',
      views: {
        'friends-tab': {
          templateUrl: 'templates/friends-index.html',
          controller: 'FriendIndexCtrl'
        }
      }
    })

    .state('tab.friend-detail', {
      url: '/friend/:petId',
      views: {
        'friends-tab': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })
    
    .state('tab.compose', {
      url: '/compose',
      views: {
        'compose-tab': {
          templateUrl: 'templates/compose.html'
        }
      }
    })

    .state('tab.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'templates/settings.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/mailbox');

});

