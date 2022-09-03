const mongoose = require('mongoose');
const express = require('express');
const xlsx = require('node-xlsx');
const http = require('http')
const ejs = require('ejs')
// const mongoConn =  'mongodb://0.0.0.0:27017/ff';
// // const configObj = {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // };

// mongoose.connect(mongoConn);
// mongoose.connection.on('connected', () => {
//     console.log('connected to mongo');
// });

// const Schema = mongoose.Schema;
// const playerSchema = new Schema({
//     name: {type: String, required: true},
//     position: {type: String, required: true},
//     team: {type: String, required: true},

// });

// const players = mongoose.model('Players', playerSchema);
const PORT = 3000;
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./views/public'));


app.get('/createList',  (req, res) => {
    // const playerList = await players.find();
    // console.log(typeof parseInt('WR10'), 10)
    const playerList =  JSON.parse(fs.readFileSync('./jsons/master1.json'));
    const context = {
        list: playerList
    }
    console.log(playerList[6])
    res.render('list', context)
});

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
    console.log('listening at port')
})