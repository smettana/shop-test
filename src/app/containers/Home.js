import React, {Component} from 'react';
import { connect } from 'react-redux';

import ItemCard from '../components/ItemCard';
import CountingBlock from '../components/CountingBlock';

import { deleteProduct, deleteAllProducts } from '../actions/actionCreator';
class Home extends Component {
    state = {
        items:[],
    }

    componentDidMount (){
        
    }

    render(){
        const {products, deleteProduct, admin} = this.props;
        
        return(
                <div className="content-warpper">
                    <div className="items-warpper">
                        {
                            products.map(({title, id, descr, img, price})=>{
                                return (
                                    <ItemCard 
                                        title={title} 
                                        id={id} 
                                        descr={descr} 
                                        img={img} 
                                        price={price} 
                                        key={id} 
                                        deleteProduct={deleteProduct}
                                        admin={admin}
                                    />
                                )
                            })
                        }
                    </div>
                    <CountingBlock admin={admin}/>
                </div>
        );
    }
}

export default connect(state => ({
    products: state.products,
}), {deleteProduct, deleteAllProducts})(Home);