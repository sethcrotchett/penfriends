angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('MessageService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var messages = [
    { msg_id: 0, from_id: 1, date_sent: '03/05/2014', thread_id: 0, father: 0, text: 'Hey, looking for new pen friends' },
    { msg_id: 1, from_id: 1, date_sent: '03/05/2014', thread_id: 0, father: 0, text: 'Looking for a friend' },
    { msg_id: 2, from_id: 2, date_sent: '03/05/2014', thread_id: 0, father: 0, text: 'Im 30 male, looking for pen friends' },
    { msg_id: 3, from_id: 3, date_sent: '03/05/2014', thread_id: 0, father: 0, text: 'Im a student in China, looking for other students ' }
  ];

  return {
    all: function() {
      return messages;
    },
    get: function(messageId) {
      // Simple index lookup
      return messages[messagelId];
    }
  }
});
