const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)


const test = async () => {
    //await categories.create(['New category from API'])
    //await categories.remove(4)
    //await categories.update(5, ['Updated category1'])
    //const catList = await categories.findAll()
    //console.log(catList)


    //Products

    //await products.addImage(4, ['img test', 'url'])
    //await products.create(['TV', 1999])
    //await products.remove(6)
    //await products.update(7, ['TV 56 Polegadas'])
    //const prodList = await products.findAll()
    //console.log(prodList)

    //const prodList = await products.findAllByCategory(5)

    //const prodList = await products.findAllPaginated()
    //console.log(prodList)

    await products.updateCategories(7, [5])

    //test connection pool
    /*for (i = 0; i <= 1000; i++) {
        products.findAllPaginated().then(prods => console.log(prods))
    }*/
}
test()