import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductsViewComponentInternal } from './ProductsViewComponent'

describe('ProductsViewComponentInternal', () => {
    it('should render product cards with correct data', () => {
        const product = {
            products: [
                { id: 1, productName: 'Product 1' },
                { id: 2, productName: 'Product 2' },
            ],
        }

        const { getByText } = render(
            <Router>
                <ProductsViewComponentInternal product={product} />
            </Router>
        )

        expect(getByText('Product 1')).toBeInTheDocument()
        expect(getByText('Product 2')).toBeInTheDocument()
    })
})
