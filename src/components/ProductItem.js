import React from "react";
import {FaTrash} from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function ProductItem({ product }) {
  return (
    <ProductConsumer>
    {value => {
      const {removeItem } = value
        return (
            <div className="row mt-3 mt-lg-0 mb-3 text-capitalize justify-content-center ">
            <div className="col-12 mx-auto col-lg-2 ">{product.title} </div>
            <div className="col-12 mx-auto col-lg-2 pb-2">
                <img src={product.img} width="60" className="img-fluid" alt="" />
            </div>
            <div className="col-12 mx-auto col-lg-2 ">$ {product.price} </div>
            <div className="col-12 mx-auto col-lg-2 ">{product.company} </div>
            <div className="col-12 mx-auto col-lg-2 ">{product.info} </div>       
            <div className="col-10 mx-auto col-lg-2 ">
            <FaTrash  className="text-danger cart-icon"onClick={() => removeItem(product.id)}/>    
            </div> 
            </div>
        )
    }}
   </ProductConsumer>
   );
 }


