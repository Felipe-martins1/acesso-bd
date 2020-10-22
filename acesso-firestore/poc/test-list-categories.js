const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()

const categories = db.collection('categories').get()

categories.then(res => {
    console.log('is empty', res.empty)
    res.forEach(doc => {
        console.log(doc.id, '=>', doc.data())
    })
})