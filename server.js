const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
io.on("connection", function(socket){
    socket.on("posting_form", function(data){
        result = {}
        for(var i=0; i<data.length; i++){
            result[data[i]["name"]] = data[i]["value"];
        }
        socket.emit("updated_message", result);
        socket.emit("random_number", {num: Math.floor(Math.random()*1000)+1});
    })
})