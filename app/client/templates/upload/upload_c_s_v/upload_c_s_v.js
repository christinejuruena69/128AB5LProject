// /*****************************************************************************/
// /* UploadCSV: Event Handlers */
// /*****************************************************************************/
// Template.UploadCSV.events({
//     'change [name="uploadCSV"]' (event, template) {
//         template.uploading.set(true);

//         Papa.parse(event.target.files[0], {
//             header: true,
//             complete(results, file) {                
//                 Meteor.call('parseUpload', results.data, (error, response) => {
//                     if (error) {
//                         console.log(error.reason);
//                     } else {
//                         template.uploading.set(false);
//                         Bert.alert('Upload complete!', 'success', 'growl-top-right');
//                     }
//                 });
//             }
//         });
//     }
// });

// /*****************************************************************************/
// /* UploadCSV: Helpers */
// /*****************************************************************************/
// Template.UploadCSV.helpers({
//     uploading() {
//         return Template.instance().uploading.get();
//     }
// });

// /*****************************************************************************/
// /* UploadCSV: Lifecycle Hooks */
// /*****************************************************************************/
// Template.UploadCSV.onCreated(function() {
//     Template.instance().uploading = new ReactiveVar(false);
// });

// Template.UploadCSV.onRendered(function() {});

// Template.UploadCSV.onDestroyed(function() {});
