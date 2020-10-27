
const categories = require('./categories')('./banco.sqlite3')
const products = require('./products')('./banco.sqlite3')

const test = async () => {
    //await categories.create([5, 'Quinta Categoria'])

    //await categories.remove(8)

    //await categories.update(1, ['Categoria Atualizada'])

    /*const catList = await categories.findAll()
    console.log(catList)*/

    //const catListPaginated = await categories.findAllPaginated({ pageSize: 2, currentPage: 0 })
    /*
    console.log('cat 0', await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }))
    console.log('cat 1', await categories.findAllPaginated({ pageSize: 2, currentPage: 1 }))
    console.log('cat 2', await categories.findAllPaginated({ pageSize: 2, currentPage: 2 }))
    console.log('cat 3', await categories.findAllPaginated({ pageSize: 2, currentPage: 3 }))
    */


    //await products.create([2, 'Produto 2', 280])
    //await products.addImages(2, [3, '<url3>', '<desc3>'])
    //await products.update(1, ['Atualizando Produto', 256])
    //await products.remove(1)

    /*const prodList = await products.findAll()
    console.log(prodList)
    */
    console.log('cat 0', await products.findAllPaginated({ pageSize: 2, currentPage: 0 }))


}

test()