var app;
$(function() {
  app = {
    server: 'http://127.0.0.1:3001/messages',
    username: 'anonymous',
    roomname: 'Lobby',

    init: function() {
      // Get username
      app.username = window.location.search.substr(10);
      console.log(app.username);
    }
  };
}());

