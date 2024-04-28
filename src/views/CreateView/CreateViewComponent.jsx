import React, { useEffect } from "react";

import { useAdsContext } from "../../state/AdsProvider/AdsProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../state/ProductProvider/ProductProvider";
import { AdForm } from "../../forms/AdForm";
export const CreateViewComponent = () => {
  const { error } = useAdsContext();
  const { productIds } = useProductContext();
  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!productIds.includes(productId)) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      <CreateViewInternal productId={productId} />
    </>
  );
};

const CreateViewInternal = ({ productId }) => {
  const { addAdForProduct } = useAdsContext();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    addAdForProduct(productId, data);
    navigate("/read/" + productId);
  };
  return (
    <>
      <AdForm onSubmit={handleSubmit} />
    </>
  );
};
