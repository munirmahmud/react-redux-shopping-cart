import currencyFormatter from 'currency-formatter';
import React, { useEffect, useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleProduct.styles.css';

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.Products);
    const [quantity, setQuantityIncrement] = useState(1);

    useEffect(() => {
        dispatch({type: "PRODUCT", id: Number(id)});
    }, [id]);

    const decrement = () => {
        quantity > 1 && setQuantityIncrement(prevState => prevState - 1);
    };

    const increment = () => {
        setQuantityIncrement(prevState => prevState + 1);
    };

    return (
        <div className="container mt-70">
            <div className="row">
                <div className="col-6">
                    <div className="product__details-img">
                        <img src={`/images/${product.image}`} alt={product.name}/>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product__details">
                        <h2>{product.name}</h2>
                        
                        <div className="product__details--price">
                            <span className="product__price-old">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                            <span className="product__price-discount">{product.discount}%</span>
                        </div>

                        <div className="product__count-controller">
                            <span className="decrement" onClick={decrement}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="increment" onClick={increment}><BsPlus /></span>
                            <button type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
