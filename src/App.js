import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Details from "./components/Details";
import Footer from "./components/Footer";
import About from "./components/About";
import Penjual from "./components/Penjual";
import ProductList from "./components/ProductList";



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          {/* <Route exact path="/" component={ManageProduct} /> */}
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details} />
          <Route path="/about" component={About}/>
          <Route path="/penjual" component={Penjual}/>
        <div>
        <Footer />
        </div>

       
      </div>
    );
  }
}

export default App;
