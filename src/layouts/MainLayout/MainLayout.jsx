import React from "react";
import { useLocation } from "react-router-dom";
import "./Layout.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((path) => path);
    return (
      <div className="breadcrumbs">
        <span>
          <div onClick={() => navigate("/")}>Products</div>
        </span>
      </div>
    );
  };

  return (
    <div className="grid-container">
      <div className="title">Ads Manager! (By Haf)</div>
      {generateBreadcrumbs()}
      <div className="content">{children}</div>
    </div>
  );
};
