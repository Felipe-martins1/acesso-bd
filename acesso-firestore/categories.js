const db = require('./firestore')


const findAll = async () => {
    const categoriesDB = await db.collection('categories').get()
    if (categoriesDB.empty) {
        return []
    }
    const categories = []
    categoriesDB.forEach(doc => {
        categories.push({
            ...doc.data(),
            id: doc.id
        })
    })
    return categories
}

const findAllPaginated = async ({ pageSize = 1, startAfter = '' }) => {
    console.log('pageSize', pageSize, 'startAfter', startAfter)
    const categoriesDB = await db
        .collection('categories')
        .orderBy('category')
        .startAfter(startAfter)
        .limit(pageSize + 1)
        .get()
    if (categoriesDB.empty) {
        return {
            data: [],
            total: 0
        }
    }
    const categories = []
    let total = 0
    categoriesDB.forEach(doc => {
        console.log(doc.id)
        if (total < pageSize) {
            categories.push({
                ...doc.data(),
                id: doc.id
            })
        }
        total++
    })
    console.log(total, pageSize)
    return {
        data: categories,
        total: categories.length,
        hasNext: total > pageSize,
        startAfter: total > pageSize ? categories[categories.length - 1].category : ''
    }
}

const create = async (data) => {
    const category = db.collection('categories').doc()

    await category.set(data)
}

const remove = async (id) => {
    const category = db.collection('categories').doc(id)

    await category.delete()
}

const update = async (id, data) => {
    const category = db.collection('categories').doc(id)

    category.update(data)
}

module.exports = {
    findAll,
    findAllPaginated,
    remove,
    create,
    update
}