
var  admin = require("firebase-admin");

var serviceAccount = require("../secrets/firebase-sa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blogyourspace-firebase.firebaseio.com"
});
module.exports = admin;   

