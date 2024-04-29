import React, { createContext, useState, useEffect, useContext } from 'react'
import ProductService from '../../services/ProductsService/ProductsService'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState()
    const [productIds, setProductIds] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        const productService = new ProductService(
            'https://drive.google.com/file/d/1NlX8tLRNDECG81UCxHjD1gH4Gz2Vy93R/view'
        )

        productService
            .fetchProducts()
            .then((data) => {
                setProduct(data)
                const ids = data.products.map((product) => product.id)
                setProductIds(ids)
                setLoading(false) 
            })
            .catch(() => {
                setError('Failed to fetch products.')
                setLoading(false) 
            })
    }, [])

    return (
        <ProductContext.Provider
            value={{ product, productIds, error, loading }}
        >
            {!loading ? children : <></>}
        </ProductContext.Provider>
    )
}
