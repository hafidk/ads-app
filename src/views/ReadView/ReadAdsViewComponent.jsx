import React, { useEffect, useState } from "react";

import { useAdsContext } from "../../state/AdsProvider/AdsProvider";
import { AddAdComponent } from "../../components/AddAd/AddAdComponent";
import { useProductContext } from "../../state/ProductProvider/ProductProvider";
import { AdComponent } from "../../components/Ad/AdComponent";
import "./ReadAdsViewComponent.css";
import { useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ReadAdsViewComponent = () => {
  const { adsByProduct, error } = useAdsContext();
  const { productIds } = useProductContext();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productIds.includes(productId)) {
      navigate("/");
    }
  }, []);

  const productAds = adsByProduct[productId] || [];

  return (
    <>
      {error && <div>{error}</div>}
      <ReadAdsViewComponentInternal
        productAds={productAds}
        productId={productId}
      />
    </>
  );
};

export const ReadAdsViewComponentInternal = ({ productAds, productId }) => {
  const { addAdForProduct, deleteAdById } = useAdsContext();
  const [adToDelete, setAdToDelete] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create/" + productId);
  };

  const handleClickQuick = () => {
    const newAd = {
      id: Math.random().toString(36).substr(2, 9),
      title: "New Ad Title",
      description: "New Ad Description",
      image: "https://via.placeholder.com/150",
    };

    addAdForProduct(productId, newAd);
  };

  const handleDelete = (adId) => {
    setAdToDelete(adId);
  };

  return (
    <div className="ads-grid-container">
      {adToDelete && (
        <PromptComponent
          onCancel={() => setAdToDelete(null)}
          onDelete={() => {
            deleteAdById(productId, adToDelete);
            setAdToDelete(null);
            toast("Deleted Ad!");
          }}
        />
      )}
      {productAds.map((ad) => (
        <AdComponent
          key={ad.id}
          ad={ad}
          productId={productId}
          //[HK] I don't know if it's intended, but the description of the issue states that the deleteView should
          // redirect to the main view once deleted, I think that's counterintuitive since you might want to edit/delete
          // other ads and this would result on a back and forth, for now I'll remain on this same screen after deleting
          // since it doesn't seem to be other views that can trigger ad deletion
          onDelete={() => handleDelete(ad.id)}
        />
      ))}
      <AddAdComponent handleClick={handleClickQuick} quick={true} />
      <AddAdComponent handleClick={handleClick} />
      <ToastContainer />
    </div>
  );
};

const PromptComponent = ({ onDelete, onCancel }) => {
  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <div className="prompt-content">
          <p>Are you sure you want to delete this ad?</p>
        </div>
        <div className="prompt-buttons">
          <button onClick={onDelete}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default PromptComponent;
