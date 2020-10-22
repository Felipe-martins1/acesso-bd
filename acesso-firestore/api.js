const categories = require('./categories')
const products = require('./products')

const testes = async () => {
    //Criar categories
    /*
    await categories.create({
        category: 'Nova category organizada'
    })
    */

    //remover categories
    /*
    await categories.remove(id)
    */

    //atualizar categories
    /*
    await categories.update('EeyM6wZ71GoaBXaohleL', { category: 'Update category' })
    */

    //listar categories
    //const cats2 = await categories.findAll()
    //console.log(cats2)

    //findAll Paginated
    /*
    const cats = await categories.findAllPaginated({})
    console.log(cats)
    */


    //----------------------------------PRODUCTS---------------------------------


    //criar produto
    /*
    await products.create({
        product: 'New Product2',
        price: 900,
        categories: ['4pg2JLoACEfongA6veAx']
    })
    */

    //criar imagens
    /*
    await products.addImage('ZaG6JZkzHgpDW7Bly4Qw', {
        description: 'Imagem criada via codigo',
        url: 'imageUrl'
    })
    */

    //Atualizar produto
    /*
    await products.update('wM4RSEmifvXQOxdACymi', {
        product: 'Name Update',
        categories: ['EeyM6wZ71GoaBXaohleL']
    })
    */

    //Deletar produtos
    //await products.remove('wM4RSEmifvXQOxdACymi')

    //Listar produtos
    //const prod = await products.findAll()
    //console.log(prod)

    //FindAll Paginated
    //const prod2 = await products.findAllPaginated({})
    //console.log(prod2)


}
testes()


