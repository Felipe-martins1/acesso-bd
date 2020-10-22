const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://acesso-bd-116fc.firebaseio.com'
});

const db = admin.firestore()

const pageSize = 1

const categories = db.collection('categories')
    .orderBy('category')
    .limit(pageSize + 1)
    .startAfter('')
    .get()

categories.then(res => {
    console.log('is empty', res.empty)
    let total = 0
    res.forEach(doc => {
        if (total < pageSize) {
            console.log(doc.id, '=>', doc.data())
        }
        total++
    })
    if (total > pageSize) {
        console.log('hasNext')
    } else {
        console.log('doesnt have next')
    }
})