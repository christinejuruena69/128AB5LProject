// /* 
//   /server/upload.js
// */
// Meteor.methods({
//     parseUpload: function(data) {
//         check(data, Array);
//         var final = [],
//             exists = Class.find({'_id': 'EjBANYnhGvoZ45Ps8'});

//         for (let i = 0; i < data.length; i++) {

//             if (exists) {
//                 var bday = new Date(data[i].birthday);
//                 data[i].birthday = bday;
//                 final.push(data[i]);
//             } else {
//                 console.warn('Rejected. This item already exists.');
//                 return;
//             }
//         }
//         // Class.update(exists._id, {$set: {students:final}});
//         return final;
//     }
// });
