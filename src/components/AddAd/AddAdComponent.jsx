import React from 'react'
import './AddAd.css'

export const AddAdComponent = ({ handleClick, quick }) => {
    return (
        <div
            className="add-ad-container"
            onClick={handleClick}
            id={quick ? 'create-quick-ad' : 'create-ad'}
        >
            <div className="add-ad-child">
                {quick ? 'Add Quickly' : ''}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
        </div>
    )
}
