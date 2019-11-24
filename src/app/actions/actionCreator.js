import {ADD_PRODUCT, DELETE_PRODUCT, DELETE_ALL_PRODUCTS} from '../constants';

export const addProduct = (id, title, descr, price, img) => ({
    type: ADD_PRODUCT,
    id,
    title,
    descr,
    price,
    img
});

export const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    id,
});

export const deleteAllProducts = () => ({
    type: DELETE_ALL_PRODUCTS
});
