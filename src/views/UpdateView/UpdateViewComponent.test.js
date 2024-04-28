import React from "react";
import { render } from "@testing-library/react";
import { UpdateViewComponent } from "./UpdateViewComponent";
import { AdsProvider } from "../../state/AdsProvider/AdsProvider";
import { ProductProvider } from "../../state/ProductProvider/ProductProvider";


describe("CreateViewInternal", () => {
  it("renders without crashing", () => {
    render(
      <AdsProvider>
        <ProductProvider>
          <UpdateViewComponent         adId={"1"}
        productId={"1"}
        ad={{}}/>
        </ProductProvider>
      </AdsProvider>
    );
  });
});
