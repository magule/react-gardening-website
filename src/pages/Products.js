import React from 'react';
import { ProductsList }  from '../pro/ProductsList';
import  ProductItem  from '../components/ProductItem';
import '../styles/Products.css'

function Products() {
    return (
        <div className="products">
            <h1 className="productsTitle">Ürünlerimiz</h1>
            <div className="productsList">
                { ProductsList.map((productItem, key) => {
                    return (
                        <ProductItem 
                            key={key}
                            image={productItem.image}
                            name={productItem.name}
                            price={productItem.price}
                        />
                    );
                })}
            </div>
            
        </div>
    )
}

export default Products;
