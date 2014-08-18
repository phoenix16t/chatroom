var app;
$(function() {
  app = {
    server: 'http://127.0.0.1:3001/messages',
    username: 'anonymous',
    roomname: 'Lobby',

    init: function() {
      // Get username
      app.username = window.location.search.substr(10);

      app.fetch();
      setInterval(app.fetch, 3000);
    },
    fetch: function() {
      $.ajax({
        url: app.server,
        type: 'GET',
        contentType: 'application/json',
        success: function(data) {
          console.log("Success:", data);
        },
        error: function(data) {
          console.error("Failed to fetch:", data);
        }



      });
    }
  };
}());
