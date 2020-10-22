const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()
const product = db.collection('products').doc()

const cat1 = 'WhVobUpuJYRN2J4r8IMC'
const catRef = db.collection('categories').doc(cat1)

product.set({
    categories: [catRef],
    price: 2000,
    product: 'produto criado via código'
}).then(snap => {
    console.log(snap)
})