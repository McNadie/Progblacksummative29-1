const express = require('express');
const app = express();

const fs = require('fs');

const Roll_data = './data.json';
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));
const roll = require(Roll_data);

app.get('/Roll/Load', function (req, resp) {
    resp.send(roll);
    const RollKeys = Object.keys(Roll_data);
});


app.get('/Roll/Clear', function (req, resp) {
    fs.writeFileSync(Roll_data,JSON.stringify({"Red Well":["",""],"Bucks Well":["",""],"St Johns":["",""],"Witchurch":["",""],"Holly Well":["",""],"Stan Well":["",""],"Whyte Well":["",""]}));
    resp.send(roll);
});

app.post('/Roll/Submit', function (req, resp) {
    console.log(req);
    const HouseB = req.body.HB;
    const Officer = req.body.Officer;
    const RollCount = req.body.RC;
    roll[HouseB] = [RollCount];
    roll[HouseB].push(Officer);
    fs.writeFileSync(Roll_data, JSON.stringify(roll));
    resp.send(roll);
});


module.exports = app;
