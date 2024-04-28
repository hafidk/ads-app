// AdComponent.jsx
import React from "react";
import "./Ad.css";
import { useNavigate } from "react-router-dom";

export const AdComponent = ({ ad, productId, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/update/${productId}/${ad.id}`);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    // <div className="ad">
    //   <div className="ad-header">
    //     <img className="ad-logo" src={ad.logo} alt={ad.name} />
    //     <span className="ad-name">{ad.name}</span>
    //   </div>
    //   <img className="ad-image" src={ad.image} alt={ad.title} />
    //   <div className="ad-content">
    //     <h2 className="ad-title">{ad.title}</h2>
    //     <p className="ad-description">{ad.description}</p>
    //   </div>
    //   <div className="ad-actions">
    //     <button className="edit-button" onClick={handleEditClick}>
    //       Edit
    //     </button>
    //     <button className="delete-button" onClick={handleDeleteClick}>
    //       Delete
    //     </button>
    //   </div>
    // </div>
    <div className="container">
      <div className="row row-1">{ad.title}</div>

      <div className="row row-3">
        <img alt="Your Image" className="image" src={ad.image} />
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
  );
};
