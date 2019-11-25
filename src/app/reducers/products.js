import {ADD_PRODUCT, DELETE_PRODUCT, DELETE_ALL_PRODUCTS} from '../constants';

import { load } from 'redux-localstorage-simple';
import {DATA} from '../data';

let INFO = load({namespace: 'shop-info'});

if(!INFO || !INFO.products || !INFO.products.length){
    INFO = {
        products: DATA
    }
}

const products = (state=INFO.products, {id, title, descr, price, img, type}) => {
    switch (type){
        case ADD_PRODUCT: 
            return [
                ...state, {
                    id,
                    title,
                    descr,
                    price,
                    img
                }
            ];
        case DELETE_PRODUCT: 
            return [...state].filter(item=>item.id !== id);
        case DELETE_ALL_PRODUCTS: 
            return [];
        default:
            return state;    
    }
}

export default products;