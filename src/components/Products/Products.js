import currencyFormatter from 'currency-formatter';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Products.styles.css';

const Products = () => {
    const {products} = useSelector(state => state.Products);
    console.log(products);
    return (
        <div className="row">
            {products.length > 0 && products.map(product => (
                <div key={product.id} className="col-3">
                    <div className="product">
                        <div className="product__img">
                            <Link to={`/product-details/${product.id}`}>
                            <img src={`/images/${product.image}`} alt={product.name} />
                            </Link>
                        </div>
                        <div className="product__name">
                            <Link to={`/product-details/${product.id}`}>
                                <h2>{product.name}</h2>
                            </Link>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="product__price">
                                    <span className="product__price-old">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                                    <span className="product__price-discount">{product.discount}%</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product__discount-price">
                                {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
