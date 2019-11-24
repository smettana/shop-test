import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountingBlock from '../components/CountingBlock';

import { addProduct } from '../actions/actionCreator';


class Add extends Component {
    state = {
        productInfo: {
            title: '',
            descr: '',
            price: '',
            img: 'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba_clear-220x220.jpg',
        },
        priceErrorInfo: {
            priceError: false,
            helperTextPrice: ''
        },
        titleErrorInfo: {
            titleError: false,
            helperTextTitle: ''
        },
        descrErrorInfo: {
            descrError: false,
            helperTextDescr: ''
        },
        productAdded: false
    }

    handleChange = (e) => {
        let info = { ...this.state.productInfo, [e.target.name]: e.target.value };
        
        switch (e.target.name) {
            case 'price':
                if (e.target.value.match(/^\d+$/) || e.target.value === '') {
                    this.setState({
                        productInfo: info,
                        priceErrorInfo: {
                            priceError: false,
                            helperTextPrice: ''
                        },
                        productAdded: false
                    });
                } else {
                    this.setState({
                        productInfo: info,
                        priceErrorInfo: {
                            priceError: true,
                            helperTextPrice: 'Please enter only numbers'
                        },
                        productAdded: false
                    });
                }
                break;
            case 'title':
                if (e.target.value.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || e.target.value === '') {
                    this.setState({
                        productInfo: info,
                        titleErrorInfo: {
                            titleError: false,
                            helperTextTitle: ''
                        },
                        productAdded: false
                    });
                } else {
                    this.setState({
                        productInfo: info,
                        titleErrorInfo: {
                            titleError: true,
                            helperTextTitle: 'Please enter only letters'
                        },
                        productAdded: false
                    });
                }
                break;
            case 'descr':
                if (e.target.value.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || e.target.value === '') {
                    this.setState({
                        productInfo: info,
                        descrErrorInfo: {
                            descrError: false,
                            helperTextDescr: ''
                        },
                        productAdded: false
                    });
                } else {
                    this.setState({
                        productInfo: info,
                        descrErrorInfo: {
                            descrError: true,
                            helperTextDescr: 'Please enter only letters'
                        },
                        productAdded: false
                    });
                }
                break;
        }
    }

    addProduct = () => {
        const state = this.state;
        const price = `${state.productInfo.price}`;
        const title = state.productInfo.title;
        const descr = state.productInfo.descr;
        const src = state.productInfo.img;
        const { priceError } = state.priceErrorInfo;
        const { titleError } = state.titleErrorInfo;
        const { descrError } = state.descrErrorInfo;
        const id = +new Date();

        const { addProduct } = this.props;
        
        if(priceError === true || titleError === true || descrError === true){
            return
        }

        addProduct(id, title, descr, +price, src);

        this.setState({
            productInfo: {
                title: '',
                descr: '',
                price: '',
                img: 'http://ihtiandr.od.ua/image/cache/catalog/img/apnoicus-220x220.jpg'
            },
            priceErrorInfo: {
                priceError: false,
                helperTextPrice: ''
            },
            titleErrorInfo: {
                titleError: false,
                helperTextTitle: ''
            },
            descrErrorInfo: {
                descrError: false,
                helperTextDescr: ''
            },
            productAdded: true,
        });

    }


    render() {
        const { productInfo, priceErrorInfo, titleErrorInfo, descrErrorInfo, productAdded } = this.state;
        const { title, descr, price } = productInfo;
        const { priceError, helperTextPrice } = priceErrorInfo;
        const { titleError, helperTextTitle } = titleErrorInfo;
        const { descrError, helperTextDescr } = descrErrorInfo;
        const {admin} = this.props;

        return (
            <div className="content-warpper">
                    <div className="form-wrapper">
                        <form action="">
                            <div className="form-item">
                                <TextField
                                    error={titleError}
                                    id="outlined-basic"
                                    className="input-field"
                                    label="Title"
                                    margin="normal"
                                    variant="outlined"
                                    name="title"
                                    helperText={helperTextTitle}
                                    value={title}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <TextField
                                    error={descrError}
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows="4"
                                    className="textarea-field"
                                    margin="normal"
                                    variant="outlined"
                                    name="descr"
                                    helperText={helperTextDescr}
                                    value={descr}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <TextField
                                    error={priceError}
                                    id="outlined-basic"
                                    className="input-field"
                                    label="Price"
                                    margin="normal"
                                    variant="outlined"
                                    name="price"
                                    helperText={helperTextPrice}
                                    value={price}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-item button-block">
                                <Button variant="contained" color="primary" className='' onClick={this.addProduct}>
                                        Add product
                                </Button>
                            </div>
                            {
                                productAdded && 
                                    <div className="product-state">
                                        Product added
                                    </div>
                            }
                        </form>
                    </div>
                    <CountingBlock admin={admin}/>
            </div>
            );
        }
    }
        
export default connect(state => ({roles: state.roles}), {addProduct})(Add);
