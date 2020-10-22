const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()
const product = db.collection('products').doc('zHRWDkzV4tOfOguHlYvh')

const cat1 = '4pg2JLoACEfongA6veAx'
const catRef = db.collection('categories').doc(cat1)

product.update({
    categories: admin.firestore.FieldValue.arrayUnion(catRef),
    price: 2000,
    product: 'Update product'
}).then(snap => {
    console.log(snap)
})