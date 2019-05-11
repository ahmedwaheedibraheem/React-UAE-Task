import React from 'react';
import ProductCard from './product-card';

const productListing = (props) => {
    let products = props.products.map(product =>
        <ProductCard
            key={product.id}
            product={product}
            editHandler={props.editHandler}
        />);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }}>
            {products}
        </div>
    );
};

export default productListing;