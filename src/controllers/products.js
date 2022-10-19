const productModels = require('../models/products')
const selectAll = async (req, res)=>{
    const {rows} = await productModels.selectAll()
    res.status(200).json({
        message: 'success',
        data: rows
    })
}


module.exports = {
    selectAll
}