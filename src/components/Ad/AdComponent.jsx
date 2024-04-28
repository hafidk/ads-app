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
    <div className="facebook-ad">
      <div className="facebook-ad-header">
        <img className="ad-logo" src={ad.logo} alt={ad.name} />
        <span className="ad-name">{ad.name}</span>
      </div>
      <img className="ad-image" src={ad.image} alt={ad.title} />
      <div className="ad-content">
        <h2 className="ad-title">{ad.title}</h2>
        <p className="ad-description">{ad.description}</p>
      </div>
      <div className="ad-actions">
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
