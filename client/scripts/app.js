var app;
$(function() {
  app = {
    server: 'http://127.0.0.1:3001/messages',
    username: 'anonymous',
    roomname: 'Lobby',
    lastMessageID: '',

    init: function() {
      app.username = window.location.search.substr(10);

      app.fetch();
      setInterval(app.fetch, 3000);
    },
    fetch: function() {
      $.ajax({
        url: app.server,
        type: 'GET',
//        data: JSON.stringify({'test': 'test'}),
        contentType: 'application/json',
        success: function(data) {
          console.log("Success:", data);
          if (data && data.length > 0) {
            app.lastMessageId = data[0].messageId;
          }
//          console.log("last message:", app.lastMessageId);
        },
        error: function(data) {
          console.error("Failed to fetch:", data);
        }
      });
    }
  };
}());
