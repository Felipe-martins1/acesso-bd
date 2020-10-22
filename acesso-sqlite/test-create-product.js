const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject) => {
    const db = new sqlite.Database(databaseFile, (err) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(db)
        }
    })
})

const run = (db, query, values) => new Promise((resolve, reject) => {
    db.run(query, values, err => {
        if (err) {
            reject(err)
        }
        else {
            resolve()
        }
    })
})

const createProduct = async () => {
    const db = await initDB('banco.sqlite3')
    await run(db, `insert into products (id,product,price) values (?, ?, ?)`, [8, 'produto 8', 200])
    await run(db, `insert into categories_products (product_id, category_id) values (?, ?)`, [8, 8])

    console.log('Product created')
}

createProduct().catch((err) => {
    console.log(err)
})