const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()
const productId = '6J8e85R08jIASvmbLcOx'
const imageRef = db
    .collection('products')
    .doc(productId)
    .collection('images')
    .doc()

imageRef
    .set({
        description: 'my description',
        url: 'my url'
    }).then(snap => {
        console.log(snap)
    })