const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()
const category = db.collection('categories').doc('WhVobUpuJYRN2J4r8IMC')

category.update({
    category: 'Update category'
}).then(snap => {
    console.log(snap)
})