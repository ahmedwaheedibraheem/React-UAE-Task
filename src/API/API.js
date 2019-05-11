const axios = require('../configuration/axios-configuration');

module.exports = {
    getAllProducts() {
        return axios.get('/')
            .then(response => response.data)
    },
    getProductById(id) {
        return axios.get(`/${id}`)
            .then(response => response.data)
    },
    editProduct(id, product) {
        return axios.put(`/${id}`, product)
            .then(response => response.data)
    }
};