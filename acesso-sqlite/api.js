
const categories = require('./categories')('./banco.sqlite3')
const products = require('./products')('./banco.sqlite3')

const test = async () => {
    //--------CATEGORIES----------

    //await categories.create([5, 'Quinta Categoria']) //-->Create category

    //await categories.remove(8) //-->Remove category

    //await categories.update(1, ['Categoria Atualizada']) //-->Update category

    /*const catList = await categories.findAll() //-->Find all categories
    console.log(catList)*/

    //const catListPaginated = await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }) //-->Find all categories paginated
    /*
    console.log('cat 0', await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }))
    console.log('cat 1', await categories.findAllPaginated({ pageSize: 2, currentPage: 1 }))
    console.log('cat 2', await categories.findAllPaginated({ pageSize: 2, currentPage: 2 }))
    console.log('cat 3', await categories.findAllPaginated({ pageSize: 2, currentPage: 3 }))
    */

    //--------------PRODUCTS------------

    //await products.create([2, 'Produto 2', 280]) //-->Create product
    //await products.addImages(2, [3, '<url3>', '<desc3>']) //--> Add images
    //await products.update(1, ['Atualizando Produto', 256]) // --> Update product
    //await products.remove(1) //--> Remove product

    /*const prodList = await products.findAll() //-->Find all products
    console.log(prodList)
    */
    //console.log('cat 0', await products.findAllPaginated({ pageSize: 2, currentPage: 0 })) //-->Find all products paginated

    //await products.updateCategories(1, [1, 2, 3]) //-->Update products categories
    //await products.updateCategories(2, [1, 2, 3])

    const prodList = await products.findAllByCategory(3) //-->Find all products by Category
    console.log(prodList)



}

test()