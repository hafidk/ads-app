import React from 'react'
import './ProductCard.css' // Import CSS for styling

export const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
            <img
                className="product-image"
                src={product.productImage}
                alt={product.productName}
            />
            <div className="product-details">
                <h2 className="product-name">{product.productName}</h2>
                <p className="product-description">
                    {product.productDescription}
                </p>
                <p className="product-price">${product.price}</p>
            </div>
        </div>
    )
}
