var fs = require('fs');  
var express = require('express'); 
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var statData = []; 
var statDataGOL = [];


if (fs.existsSync("ytrewq/data.json")) {
    var statData = require("./ytrewq/data.json");
}
if (fs.existsSync("qwerty/data.json")) {
    var statDataGOL = require("./qwerty/data.json");
}


app.use(express.static("ytrewq"));
app.use(express.static("qwerty"));
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));


app.get('/index.stats.html', function (req, res) {
    res.redirect('index.html');
});
app.get('/', function (req, res) {
    res.redirect('index.stats.html');
});

server.listen(4544);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); 
        fs.writeFile('ytrewq/data.json', JSON.stringify(statData)); 
    })

    
    socket.on("get stats", function () { 
        fs.readFile('ytrewq/data.json', "utf8", function(err, statisticsFromFile) {
            socket.emit("send stats",statisticsFromFile);    
        });
    })
    
});
io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statDataGOL.push(data); 
        fs.writeFile('qwerty/data.json', JSON.stringify(statDataGOL)); 
    })

    
    socket.on("get stats", function () { 
        fs.readFile('qwerty/data.json', "utf8", function(err, statisticsFromFile) {
            socket.emit("send stats",statisticsFromFile);    
        });
    })
    
});