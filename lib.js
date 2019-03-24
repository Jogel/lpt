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

// sets:
// {
//   "set_num": "7865-1", //inventories
//   "name": "12V Motor",
//   "year": 1980,
//   "theme_id": 242, // themes
//   "num_parts": 19
// }

// themes
// {
//   "id":242,
//   "name": "test1",
//   "parent_id": 322
// }


const fs = require('fs');
const papa = require('papaparse');
const sets = fs.createReadStream('./data/sets.csv');
var count = 0; // cache the running count


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

