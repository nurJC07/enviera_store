import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import ProductItem from "./ProductItem";
import ProductColumns from "./ProductColumns"
import ProductFilter from "./ProductFilter";
export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <ProductsWrapper className="py-3">
            <div className="container">              
              <div className="row">             
                <div className="col-12 mx-auto justify-content-center">
                <ProductFilter />
                  <h6 className="text-title ">
                    total products : {filteredProducts.length}
                  </h6>
                  <hr />
                </div>
              </div >
              <div className="col-12 ">
               <ProductColumns />              
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no items matched you search
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <ProductItem key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductsWrapper = styled.section``;

