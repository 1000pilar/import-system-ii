// const filter = { name: 'Will Riker' };
// const update = { age: 29 };

// await Character.countDocuments(filter); // 0

// let doc = await Character.findOneAndUpdate(filter, update, {
//   new: true,
//   upsert: true // Make this update into an upsert
// });
// doc.name; // Will Riker
// doc.age; // 29


const pibHdr = require('../../models/PibTables/tblPibHdr.js')
const 