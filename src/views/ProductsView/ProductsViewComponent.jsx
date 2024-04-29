import React from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCardComponent'
import { useProductContext } from '../../state/ProductProvider/ProductProvider'
import { useNavigate } from 'react-router-dom'

export const ProductsViewComponent = () => {
    const { product, error } = useProductContext()
    return (
        <>
            {error && <div>{error}</div>}
            {product && <ProductsViewComponentInternal product={product} />}
        </>
    )
}

export const ProductsViewComponentInternal = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                {product.products.map((product) => (
                    <ProductCard
                        product={product}
                        onClick={() => navigate('./read/' + product.id)}
                    />
                ))}
            </ul>
        </div>
    )
}
