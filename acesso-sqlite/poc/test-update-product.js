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

const updateProduct = async () => {
    const db = await initDB('banco.sqlite3')
    await run(db, `update products set product=? where id=?`, ['Novo produto atualizado', 8])
    await run(db, `update products set price=? where id=?`, [250, 8])
    //apagar tudo de categories_products, adicionar o que ficou 
    //ou remover somente quem foi removido e adicionar somente quem foi adicionado


    console.log('Products updated')
}

updateProduct().catch((err) => {
    console.log(err)
})