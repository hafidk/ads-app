import React from "react";
import { useLocation } from "react-router-dom";
import "./Layout.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const generateBreadcrumbs = () => {
    const productName = location.pathname.split("/").filter((path) => path)[1];
    return (
      <div className="breadcrumbs">
        <span onClick={() => navigate("/")}>Products</span>
        {productName && (
          <span onClick={() => navigate(`/read/${productName}`)}>
            {" "}
            &gt; {productName}
          </span>
        )}
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
