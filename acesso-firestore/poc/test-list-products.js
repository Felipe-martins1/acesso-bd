const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()

const products = db.collection('products').get()

products.then(productSnap => {
    console.log('is empty', productSnap.empty)
    productSnap.forEach(product => {
        console.log(product.id, '=>', product.data())
        db
            .collection('products')
            .doc(product.id)
            .collection('images')
            .get()
            .then(imageSnap => {
                imageSnap.forEach(img => {
                    console.log('img ==>', img.id, '=>', img.data())
                })
            })
    })
})