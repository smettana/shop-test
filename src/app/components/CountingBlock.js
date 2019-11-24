import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import DeleteButtonBlock from './DeleteButtonBlock';
import { deleteAllProducts } from '../actions/actionCreator';

const _CountingBlock = (props) => {
    const {products, admin} = props;

    const totalItems = (items) =>{
        const itemsQuantity = items.length;
        return itemsQuantity
    }

    const totalPrice = (items) => {
        let counter = 0;
        items.forEach(({price})=>{
            counter += price
        });
        return counter
    }

    const averagePrice = (items) => {
        const itemsQuantity = items.length;
        let averagePrice = 0
        let counter = 0;

        items.forEach(({price})=>{
            counter += price
        });
        averagePrice = items.length === 0 ? 0 :counter / itemsQuantity;

        return averagePrice.toFixed(2);
    }

    const deleteAllItems = () => {
        const { deleteAllProducts } = props;

        deleteAllProducts();
    }

    return (
        <Fragment>
            <div className="сounting">
                <div className="total-items">
                    <p>Total count: {totalItems(products)}</p>
                </div>
                <div className="total-price">
                    <p>Total price: {totalPrice(products)}</p>
                </div>
                <div className="average-price">
                    <p>Average price: {averagePrice(products)}</p>
                </div>

            </div>
            {admin ? <DeleteButtonBlock deleteAllItems={deleteAllItems} /> : null}
        </Fragment>
    );
}

const CountingBlock = connect(
    state => ({
        products: state.products,
        roles: state.roles
    }),
    { deleteAllProducts }
)(_CountingBlock);

export default CountingBlock;
