import React, { createContext, useState, useContext, useEffect } from 'react'

const AdsContext = createContext()

export const useAdsContext = () => {
    return useContext(AdsContext)
}

export const AdsProvider = ({ children }) => {
    const [adsByProduct, setAdsByProduct] = useState({})
    const [adIds, setAdIds] = useState([])

    const addAdForProduct = (productId, newAd) => {
        setAdsByProduct((prevAdsByProduct) => ({
            ...prevAdsByProduct,
            [productId]: prevAdsByProduct[productId]
                ? [...prevAdsByProduct[productId], newAd]
                : [newAd],
        }))
    }

    const deleteAdById = (productId, adId) => {
        setAdsByProduct((prevAdsByProduct) => {
            const updatedAdsByProduct = { ...prevAdsByProduct }
            updatedAdsByProduct[productId] = updatedAdsByProduct[
                productId
            ].filter((ad) => ad.id !== adId)
            return updatedAdsByProduct
        })
    }

    const updateAdForProduct = (productId, adId, updatedAd) => {
        setAdsByProduct((prevAdsByProduct) => {
            const updatedAdsByProduct = { ...prevAdsByProduct }
            const updatedAds = updatedAdsByProduct[productId]?.map((ad) =>
                ad.id === adId ? { ...ad, ...updatedAd } : ad
            )
            updatedAdsByProduct[productId] = updatedAds
            return updatedAdsByProduct
        })
    }

    useEffect(() => {
        const ids = Object.values(adsByProduct).flatMap((adList) =>
            adList.map((ad) => ad.id)
        )
        setAdIds(ids)
    }, [adsByProduct])

    return (
        <AdsContext.Provider
            value={{
                adsByProduct,
                adIds,
                addAdForProduct,
                deleteAdById,
                updateAdForProduct,
            }}
        >
            {children}
        </AdsContext.Provider>
    )
}
