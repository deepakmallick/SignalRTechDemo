(function () {

    $.connection.hub.start()
    .done(function () {
        console.log("IT WORKED!");
        $.connection.myHub.server.announce("Message From Server");
    })
    .fail(function () {
        alert("It Failed!");
    });

    $.connection.myHub.client.announce = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }




})()

