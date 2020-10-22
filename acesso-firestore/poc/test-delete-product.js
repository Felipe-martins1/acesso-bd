const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()

const productId = '6J8e85R08jIASvmbLcOx'

const productsRef = db.collection('products').doc(productId)

const imagesRef = db.collection('products').doc(productId).collection('images').doc(img.id)

db
    .collection('products')
    .doc(productId)
    .collection('images')
    .get()
    .then(imageSnap => {
        const exclusoes = []
        imageSnap.forEach(img => {
            exclusoes.push(imagesRef.delete())
        })
        return Promise.all(exclusoes)
    })
    .then(() => {
        return productsRef.delete()
    })
    .then(() => {
        console.log('everything was deleted')
    })
