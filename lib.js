// async function myReadfile () {
//     try {
//       const file = await fs.readFile('./Index.html');
//     }
//     catch (err) { console.error( err ) }
//   }


// const inventory_parts = require('../data/inventory_parts.csv');
// const inventory_sets = require('../data/inventory_sets.csv');
// const part_categories = require('../data/part_categories.csv');
// const part_relationships = require('../data/part_relationships.csv');
// const parts = require('../data/parts.csv');
// const sets = require('../data/sets.csv');
// const themes = require('../data/themes.csv');



const fs = require('fs');
const papa = require('papaparse');
const sets = fs.createReadStream('./data/sets.csv');
var count = 0; // cache the running count

const dataMock = 'set_num,name,year,theme_id,num_parts, 00-1,Weetabix Castle,1970,414,471    001-1,Gears,1965,1,43  0011-2,Town Mini-Figures,1978,84,12 0011-3,Castle 2 for 1 Bonus Offer,1987,199,2'

// papa.parse(dataMock, {
//     worker: true, // Don't bog down the main thread if its a big file
//     step: function(result) {
//         // do stuff with result
//     },
//     complete: function(results, dataMock) {
//         console.log('parsing complete read', count, 'records.'); 
//     }
// });
// const data = '';

papa.parse(sets, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {

       data = results;

       console.log('data = ', JSON.stringify(data,null,2) )
      
    }
  });


// Parse CSV string
// var data = papa.parse(sets);
// console.log('tmp = ', data);


// const kotz = console.log('test123', data);

