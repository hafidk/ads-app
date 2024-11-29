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
            <div className="title-container">
                <div className="icon-circle"></div>
                <div className="title-items">
                    <span>{ad.title}</span>
                    sponsored
                </div>
            </div>
            <div className="description">{ad.description}</div>
            <div className="row row-3">
                <img alt="" className="image" src={ad.image} />
            </div>
            <div className="row row-2">{ad.description}</div>
            <div className="row row-4">
                <button className="action-button" onClick={handleEditClick}>
                    <EditIcon />
                </button>
                <button className="action-button" onClick={handleDeleteClick}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}

function EditIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

function DeleteIcon() {
    return (
        <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
        >
            <g id="XMLID_6_">
                <g id="XMLID_11_">
                    <path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105    C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75    S266.355,300,225,300z" />
                </g>
                <g id="XMLID_18_">
                    <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45    H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" />
                </g>
                <g id="XMLID_23_">
                    <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0    c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213    c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606    c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225    l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" />
                </g>
            </g>
        </svg>
    )
}
