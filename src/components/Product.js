import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <StyledLink to="/details">
            <div className="img-container p-2">
              <img src={img} alt="prodImage" className="card-img-top" />
            </div>

            <div className="card-footer text-center">
              <TitleWrapper className="mb-0">{title}</TitleWrapper>
            </div>
          </StyledLink>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              console.log("you added to cart");
            }}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const TitleWrapper = styled.p`
  color: var(--mainDark);
  font-family: "brandonLight" !important;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const ProductWrapper = styled.div`
  .card {
    border-color: var(--mainLight);
    border-width: 0px 0px 6px 0px;
  }
  &:hover {
    .card {
      background: rgba(248, 244, 227, 0.4);
      .card-footer {
        text-decoration: none !important;
      }
    }
  }
  .card-img-top {
    margin-bottom: 0px;
    transition: all 0.35s ease-in-out !important;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card:hover .card-img-top {
    transform: scale(1.5);
  }
  .card:hover .cart-btn {
    display: inline;
  }
  .cart-btn {
    display: none;
    color: var(--mainDark);
    text-align: center;
    position: absolute;
    padding: 0.15rem 0.4rem;
    border: none;
    top: 7.5%;
    left: 79%;
    background: var(--mainLight);
    border-radius: 50%;
  }
`;
