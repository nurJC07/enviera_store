import React, { Component } from "react";

export default class ProductColumns extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">product name</p></strong> 
          </div>
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">picture</p></strong> 
          </div>
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">price</p></strong> 
          </div>
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">company</p></strong> 
          </div>
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">info</p></strong> 
          </div>
          <div className="col-12 mx-auto col-lg-2 ">
           <strong><p className="text-uppercase">remove</p></strong> 
          </div>
          
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react'
// import {ProductConsumer} from "../context";
// import ProductItem from "./ProductItem";
// import ProductFilter from "./ProductFilter";


// export default function ProductColumns({ product, value }) {
//       return (
          
//             <div className="row">
//             <div className="col-lg-12 text-center"></div>
//             <center>
//             <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Title</th>
//                     <th>Picture</th>
//                     <th>Price</th>
//                     <th>Company</th>
//                     <th>Info</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
           
//             <ProductItem/>>
            
//             </tbody>     
//             </table>
//             </center>
//             </div>
           
           
            
//         );
//     }
