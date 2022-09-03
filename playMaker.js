const xlsx = require('node-xlsx')
const fs = require('fs');
const { parse } = require('path');
const { header } = require('express/lib/request');
const str = require('./strings/cbs.js')

async function parseCSVs(readPath, writePath) {
    const worksheet = xlsx.parse(fs.readFileSync(`./csvs/${readPath}`))[0].data
    
    // const headerArr = worksheet[0];
    
    const formattedPlayers = [];
    for (let i = 0; i < worksheet.length; i++) {
        let nA = worksheet[i][1].split(' ');
        console.log( worksheet[i])
        let po = {
            totalRank: worksheet[i][0],
            byeWeek: worksheet[i][2]
        };
        // console.log(nameArr);
        let l = nA.length;
        let ws = nA;
        po.cost = ws[l-1]
        po.position = ws[l-2]
        po.team = ws[l-3]
        ws.pop()
        ws.pop()
        ws.pop()
        po.name = ws.join(' ')
        formattedPlayers.push(po);  
    }    
    console.log(formattedPlayers)
    // console.log(str)
    // let positions = str.split('&')
    // let indexes = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF']
    // positions.forEach((position, index) => {
        // const players = str.split('&');
        // let formattedPlayers = []
        // players.forEach(player => {
        //     let pa = player.trim().split('~')
        //     let po = {};
        //     // po.positionRank = `${indexes[index]}${pa[0]}`;
        //     po.totalRank = pa[0]
        //     po.name = pa[1] + ' ' + pa[2];
        //     po.team = pa[3];
        //     po.position = pa[4];
        //     po.cost = pa[5];
        //     po.byeWeek = pa[6];
        //     formattedPlayers.push(po)
        // });
        // console.log(formattedPlayers)
        fs.writeFileSync(`./jsons/t200sheet6.json`, JSON.stringify(formattedPlayers))
    // })







    // worksheet.forEach(playerArr => {
    //     let playerStr = playerArr[0];
    //     let playerObj = {};
    //     let pl = playerStr.split(', ');
    //     // console.log(pl);
    //     playerObj.totalRank = parseInt(pl[0], 10);
    //     playerObj.name = pl[1];
    //     playerObj.position = pl[2];
    //     playerObj.team = pl[3];
    //     playerObj.positionRank = pl[4];;;
    //     formattedPlayers.push(playerObj)
    // });
    // console.log(formattedPlayers);
    // fs.writeFileSync(writePath, JSON.stringify(formattedPlayers))
};

parseCSVs('cbs3.xlsx', );
