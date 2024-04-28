import React from "react";
import "./Ad.css";

export const AdComponent = ({ ad }) => {
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
    </div>
  );
};
