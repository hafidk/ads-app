import React from 'react'
import { render } from '@testing-library/react'
import { CreateViewInternal } from './CreateViewComponent'
import { AdsProvider } from '../../state/AdsProvider/AdsProvider'
import { ProductProvider } from '../../state/ProductProvider/ProductProvider'

describe('CreateViewInternal', () => {
    it('should render', () => {
        render(
            <AdsProvider>
                <ProductProvider>
                    <CreateViewInternal productId="1" />
                </ProductProvider>
            </AdsProvider>
        )
    })
})
