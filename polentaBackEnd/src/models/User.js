const {v4 : uuidv4} = require ('uuid');
const connection = require(".../database/connection");

module.exports = {
    async create(user){
        const product_id = uuidv4();
        product.product_id = product_id;
        const result = await connection("user").insert(user);
        return result;
    },
    async getById({ user_id }) {
        const result = await connection("user").where({user_id }).select("*");
        return result;

    },
    async updateById({user_id, user}){
        const result = await connection("user").where(user_id).update(user);
        return result;
    },
    async deleteById(user_id){
        const result = await connection("user").where({user_id}).delete();
        return result;
    }
}
