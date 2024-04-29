import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PromptComponent from './ReadAdsViewComponent'
import { ReadAdsViewComponentInternal } from './ReadAdsViewComponent'
import { useAdsContext } from '../../state/AdsProvider/AdsProvider'
import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}))

jest.mock('../../state/AdsProvider/AdsProvider', () => ({
    useAdsContext: jest.fn(),
}))

describe('ReadAdsViewComponentInternal', () => {
    beforeEach(() => {
        useAdsContext.mockReturnValue({
            addAdForProduct: jest.fn(),
            deleteAdById: jest.fn(),
        })
        useNavigate.mockReturnValue(jest.fn())
    })

    it('should renders ads correctly', () => {
        const productAds = [
            {
                id: 1,
                title: 'Ad 1',
                description: 'Description 1',
                image: 'image1.jpg',
            },
            {
                id: 2,
                title: 'Ad 2',
                description: 'Description 2',
                image: 'image2.jpg',
            },
        ]
        const productId = '123'

        const { getByText } = render(
            <ReadAdsViewComponentInternal
                productAds={productAds}
                productId={productId}
            />
        )

        expect(getByText('Ad 1')).toBeInTheDocument()
        expect(getByText('Ad 2')).toBeInTheDocument()
    })

    it('should call addAdForProduct when Quick Add Ad button is clicked', () => {
        const productAds = []
        const productId = '123'

        const { getByText } = render(
            <ReadAdsViewComponentInternal
                productAds={productAds}
                productId={productId}
            />
        )

        fireEvent.click(getByText('Add Quickly'))

        expect(useAdsContext().addAdForProduct).toHaveBeenCalledTimes(1)
        expect(useAdsContext().addAdForProduct).toHaveBeenCalledWith(
            productId,
            {
                id: expect.any(String),
                title: 'New Ad Title',
                description: 'New Ad Description',
                image: '',
            }
        )
    })

    it('should call deleteAdById when Delete button is clicked', () => {
        const productAds = [
            {
                id: 1,
                title: 'Ad 1',
                description: 'Description 1',
                image: 'image1.jpg',
            },
        ]
        const productId = '123'

        const { getByText } = render(
            <ReadAdsViewComponentInternal
                productAds={productAds}
                productId={productId}
            />
        )

        fireEvent.click(getByText('Delete'))
        fireEvent.click(getByText('Yes'))

        expect(useAdsContext().deleteAdById).toHaveBeenCalledTimes(1)
        expect(useAdsContext().deleteAdById).toHaveBeenCalledWith(productId, 1)
    })
})

describe('PromptComponent', () => {
    it('should display the prompt message', () => {
        const { getByText } = render(<PromptComponent />)
        expect(
            getByText('Are you sure you want to delete this ad?')
        ).toBeInTheDocument()
    })

    it('should call onDelete when "Yes" button is clicked', () => {
        const onDelete = jest.fn()
        const { getByText } = render(<PromptComponent onDelete={onDelete} />)
        fireEvent.click(getByText('Yes'))
        expect(onDelete).toHaveBeenCalledTimes(1)
    })

    it('should call onCancel when "No" button is clicked', () => {
        const onCancel = jest.fn()
        const { getByText } = render(<PromptComponent onCancel={onCancel} />)
        fireEvent.click(getByText('No'))
        expect(onCancel).toHaveBeenCalledTimes(1)
    })
})
