import React, { Component } from "react";
import { items, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
//   state = {
//     products: [],
//     detailProduct: detailProduct,
//     modalOpen: false,
//     modalProduct: detailProduct,
//     searchListProduct: []
//   };
//   componentDidMount() {
//     this.setProducts();
//   }

//   setProducts = () => {
//     let products = [];
//     storeProducts.forEach(item => {
//       const singleItem = { ...item };
//       products = [...products, singleItem];
//     });
//     this.setState(() => {
//       return { products };
//   })
//   }

//   getItem = id => {
//     const product = this.state.products.find(item => item.id === id);
//     return product;
//   };
//   handleDetail = id => {
//     const product = this.getItem(id);
//     this.setState(() => {
//       return { detailProduct: product };
//     });
//   };

//   openModal = id => {
//     const product = this.getItem(id);
//     this.setState(() => {
//       return { modalProduct: product, modalOpen: true };
//     });
//   };
//   closeModal = () => {
//     this.setState(() => {
//       return { modalOpen: false };
//     });
//   };

//   removeItem = id =>{
//     if(window.confirm('Are you sure to delete?')){
//       let tempProducts = [...this.state.products];
//       tempProducts = tempProducts.filter(item => item.id !== id);  
//        this.setState(()=> {
//          return {
//            products: [...tempProducts]
//          }
//        })
//      }
//     }

//     searchId = (id) => {

//       console.log("lagi nyari ya")
//       // const product = this.getItem(id);
//       // var id = this.refs.idSearch
   
//       let tempProducts = [...this.state.products];
//       console.log(arrSearch)
//       console.log(id)
//       var arrSearch = this.state.products.filter(item => item.id === id);
//             this.setState({ 
//               searchListProduct: arrSearch })   
// }

//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleDetail: this.handleDetail,
//           removeItem: this.removeItem,
//           searchId: this.searchId
        
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
state = {

  products: [],
  title: "all",
  detailProduct: detailProduct,
  filteredProducts: [],
   singleProduct: {},

  search: "",
  price: 0,
  min: 0,
  max: 0,
  company: "all",
};

componentDidMount() {
      this.setProducts();
    }
  
 
    setProducts = () => {
      let products = [];
     
      items.forEach(item => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      });
      
      console.log(items);
     
      // get max price
      let maxPrice = Math.max(...products.map(item => item.price));
      this.setState(() => {
            return { 
             
              products,
              filteredProducts: products,
              singleProduct: this.getStorageProduct(),
              loading: false,
              price: maxPrice,
              max: maxPrice
             };
        })
      }
      getStorageProduct = () => {
        return localStorage.getItem("singleProduct")
          ? JSON.parse(localStorage.getItem("singleProduct"))
          : {};
      }
  
    getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
    };
    handleDetail = id => {
      const product = this.getItem(id);
      this.setState(() => {
        return { detailProduct: product };
      });
    };

    handleChange = event => {
      const name = event.target.name;
  
      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;
      this.setState(
        {
          [name]: value
        },
        this.sortData
      );
    };
    setSingleProduct = id => {
      let product = this.state.products.find(item => item.id === id);
      localStorage.setItem("singleProduct", JSON.stringify(product));
      this.setState(
        {
          singleProduct: { ...product },
        
        },
        () => console.log(this.state.singleProduct)
      );
    };
    sortData = () => {
      const { products, price, company,  search } = this.state;
      let tempProducts = [...products];
  
      // filter by company
      if (company !== "all") {
        tempProducts = tempProducts.filter(item => item.company === company);
      }
      // filter by price
      tempProducts = tempProducts.filter(item => item.price <= price);
      // free shipping
     
      if (search.length > 0) {
        tempProducts = tempProducts.filter(item => {
          let tempSearch = search.toLowerCase();
          let tempTitle = item.title.toLowerCase().slice(0, search.length);
  
          if (tempSearch === tempTitle) {
            return item;
          }
        });
      }
      this.setState({
        filteredProducts: tempProducts
      });
    };

    removeItem = id =>{
          if(window.confirm('Are you sure to delete?')){
            let tempProducts = [...this.state.products];
            tempProducts = tempProducts.filter(item => item.id !== id);  
             this.setState(()=> {
               return {
                filteredProducts: tempProducts,
                products:tempProducts
               }
             })
           }
        
    }
      render() {
            return (
              <ProductContext.Provider
                value={{
                  ...this.state,
                  handleDetail: this.handleDetail,
                  removeItem: this.removeItem,
                  getProduct: this.getProduct,
                  handleChange: this.handleChange,
                  setSingleProduct: this.setSingleProduct,
                
                }}
              >
                {this.props.children}
              </ProductContext.Provider>
            );
          }


}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
