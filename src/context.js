import React, { Component } from "react";
import { shopProducts, detailProduct } from "./data";

const productContext = React.createContext();
//Provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    shopProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from cart");
  };
  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider, ProductConsumer };
