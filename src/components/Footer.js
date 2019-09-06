// import React, { Component } from 'react';
// import styled from "styled-components";

// export default class Footer extends Component {
//     render() {
//         return (
//             <Nav className="py-3">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                             <h4>copyright © 2019 Facebook Inc </h4>
//                             </div>
//             </div>
//             </Nav>
//                     )}}


// const Nav = styled.nav`
//   background: var(--mainWhite);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size:1.3rem;
//     text-transform:capitalize;
//   }
//   @media (max-width: 576px) {
//     .navbar-nav {
//       flex-direction: row !important;
// `;

import React, { Component } from "react";
import styled from "styled-components";


export default class Footer extends Component {
  render() {
    return (
      
            <FooterWrapper>
              <div className="container py-3">
              <div className="row justify-content-center">
               
                    <p className="text-capitalize">
                      copyright &copy; enviera store {new Date().getFullYear()}.
                      all rights reserved
                    </p>
                  
                  </div>
                 
                </div>
            
            </FooterWrapper>
          );
        }
     
    
  }

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    text-transform:capitalize;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;