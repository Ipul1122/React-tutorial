import axios from 'axios' ;

export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            callback(response.data);
        }).catch(error => {
            console.error('There was an error fetching the products!', error);
        })
}
