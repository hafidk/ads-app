// AdComponent.jsx
import React from 'react'
import './Ad.css'
import { useNavigate } from 'react-router-dom'

export const AdComponent = ({ ad, productId, onDelete }) => {
    const navigate = useNavigate()

    const handleEditClick = () => {
        navigate(`/update/${productId}/${ad.id}`)
    }

    const handleDeleteClick = () => {
        onDelete()
    }

    return (
        <div className="container">
            <div className="row row-1">{ad.title}</div>

            <div className="row row-3">
                <img alt="" className="image" src={ad.image} />
            </div>
            <div className="row row-2">{ad.description}</div>
            <div className="row row-4">
                <button className="action-button" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="action-button" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}
