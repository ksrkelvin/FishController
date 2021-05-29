const Item = require("../models/Item")
const calcs = require("../models/calcs")


const newItems = async(req, res)=>{
    let item = new Item(req.body)

    try{
        let doc = await item.save()
        res.redirect('/')
    }catch(error){
        res.render('index', {error, body: req.body})
    }
}

const allItems = async (req, res)=>{
    try{
        let docs = await Item.find({})
        
        let vendasDinheiro = calcs.vendasDinheiro(docs)
        let vendasKg = calcs.vendasKg(docs)
        let comprasDinheiro = calcs.comprasDinheiro(docs)
        let comprasKg = calcs.comprasKg(docs)






        res.render('index', {items: docs, vendasDinheiro: vendasDinheiro, vendasKg: vendasKg, comprasDinheiro, comprasKg})


        
    }catch(error){
        res.render(error)
    }
}


module.exports = {allItems, newItems}