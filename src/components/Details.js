import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            designer,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3"></div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
