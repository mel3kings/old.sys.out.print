var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var properties = require('./headers');
var _  = require('lodash');
app.listen(port);
// middleware of express static, we are using this to get css/or any resources
app.use("/assets", express.static(__dirname + '/resources'));

app.use("/", function (req, res, next) {
    console.log("Received request on " + req.url + " any query string: " + req.query);
    next();
});

app.get('/', function (req, res) {
    res.json({status: 'Status is Okay'});
});

app.get('/get/:type/:id', function (req, res) {
    console.log("get request for: " + req.params.type + " id: " + req.params.id);
    var url = __dirname + '/resources/content/' + req.params.type + "/" + req.params.id +".html";
    var data = fs.readFileSync(url, {encoding: 'utf8', highWaterMark: 1 * 1024});
    var header = _.get(properties.keys, req.params.id);
    console.log("Fetching header with " + req.params.id + " resulted to :" + header);
    res.json({id: req.params.id, data: data, header:header});
});

var jsonParser = bodyparser.json();
app.post("/post", jsonParser, function (req, res) {
    console.log("recieved post request data and returning as response..");
   res.send(req.body);
});