import React, { useEffect, useState } from 'react'

import { useAdsContext } from '../../state/AdsProvider/AdsProvider'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AdForm } from '../../components/AdForm/AdForm'
import { useProductContext } from '../../state/ProductProvider/ProductProvider'

export const UpdateViewComponent = () => {
    const { adIds, error, adsByProduct } = useAdsContext()
    const { productIds } = useProductContext()
    const { adId, productId } = useParams()
    const navigate = useNavigate()

    const [currentAd, setCurrentAd] = useState()

    useEffect(() => {
        debugger
        if (
            !adIds.includes(adId) ||
            !productIds.includes(productId) ||
            adsByProduct[productId] === undefined
        ) {
            navigate('/')
        }
        const ad = adsByProduct[productId].find((ad) => ad.id === adId)
        setCurrentAd(ad)
    }, [])

    return (
        <>
            {error && <div>{error}</div>}
            <UpdateViewComponentInternal
                adId={adId}
                productId={productId}
                ad={currentAd}
            />
        </>
    )
}

const UpdateViewComponentInternal = ({ productId, ad }) => {
    const { updateAdForProduct } = useAdsContext()
    const navigate = useNavigate()
    const handleEdit = (data) => {
        updateAdForProduct(productId, ad.id, data)
        navigate('/read/' + productId)
    }
    return (
        <>
            <AdForm onSubmit={handleEdit} ad={ad} />
        </>
    )
}
