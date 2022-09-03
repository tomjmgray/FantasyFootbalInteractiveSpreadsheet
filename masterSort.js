const fs = require('fs');
const s1 = JSON.parse(fs.readFileSync('./jsons/t200sheet1.json'))
const s2 = JSON.parse(fs.readFileSync('./jsons/t200sheet4.json'))
const s3 = JSON.parse(fs.readFileSync('./jsons/t200sheet5.json'))
const s4 = JSON.parse(fs.readFileSync('./jsons/t200sheet6.json'));

let baseArr = s1.map((po )=> {
    po.rankArr = [po.totalRank];
    po.positionRankArr = [parseInt(po?.positionRank?.replace(po.position, ''), 10)];
    po.costArr = [];
    return po
});

// console.log(baseArr[6])

function mapToBase(arr) {
    arr.forEach(po => {
        let nA = po.name.split(' ');
        let last = nA[1];
        let first = nA[0];
        let total = parseInt(po.totalRank, 10);
        let found = baseArr.findIndex(pS => pS.name.includes(last) && pS.name[0] == first[0])
        if (found >= 0) {
            // baseArr[found].positionRank.push(parseInt(po.positionRank?.replace(po.position, ''), 10));
            baseArr[found].costArr.push(parseInt(po.cost.replace('$', ''), 10));
            baseArr[found].rankArr.push(parseInt(po.totalRank, 10))
            if (po?.byeWeek) {
                baseArr[found].byeWeek = po.byeWeek
            }
        } else {
            po.rankArr = [parseInt(po.totalRank), 10];
            // po.positionRankArr = [parseInt(po?.positionRank?.replace(po.position, ''), 10)];
            po.costArr = [];
            baseArr.push(po);
            console.log('NEW PLAYER FOUND', po.name)
        }
    })
};

mapToBase(s2);
mapToBase(s3);
mapToBase(s4);
console.log(baseArr.length);

let avgArr = baseArr.map(po => {
    let avgRank = 0;
    po.rankArr.forEach(rank => {
        avgRank += parseInt(rank, 10)
    });
    po.totalRank = (avgRank / po.rankArr.length).toFixed(2);
    return po
})

let sortedArr = avgArr.sort((a, b) =>  parseInt(a.totalRank, 10) - parseInt(b.totalRank, 10)
)

fs.writeFileSync('./jsons/master1.json', JSON.stringify(sortedArr))