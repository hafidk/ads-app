import React, { useEffect } from "react";

import { useAdsContext } from "../../state/AdsProvider/AdsProvider";
import { AddAdComponent } from "../../components/AddAd/AddAdComponent";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../state/ProductProvider/ProductProvider";
import { useNavigate } from "react-router-dom";
import { AdComponent } from "../../components/Ad/AdComponent";

export const ReadAdsViewComponent = () => {
  const { adsByProduct, error, addAdForProduct } = useAdsContext();
  const { productIds, product } = useProductContext();
  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!productIds.includes(productId)) {
      navigate("/");
    }
  }, []);

  const productAds = adsByProduct[productId] || [];

  const handleClick = () => {
    const newAd = {
      id: Math.random().toString(36).substr(2, 9),
      title: "New Ad Title",
      description: "New Ad Description",
      image: "https://via.placeholder.com/150",
    };

    addAdForProduct(productId, newAd);
  };

  return (
    <>
      <AddAdComponent handleClick={handleClick} />
      {error && <div>{error}</div>}
      {productAds.map((ad) => (
        <AdComponent ad={ad} />
      ))}
      {/* {ads && <ProductsViewComponentInternal product={ads} />} */}
    </>
  );
};

// const ProductsViewComponentInternal = ({ product }) => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <ul>
//         {product.products.map((product) => (
//           <ProductCard
//             product={product}
//             onClick={() => navigate("./read/" + product.id)}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };
