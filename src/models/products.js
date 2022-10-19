const pool = require('../config/db')
const selectAll = ()=>{
    return pool.query('SELECT * from products')

}

module.exports = {
    selectAll
}