import React, { Component } from 'react';
import styled from "styled-components"

export default class Title extends Component {
  render() {
    return (
      <div className = "row">
        <TitleWrapper className = "mx-auto my-2 text-center text-title">
          <h1 className = "font-weight-bold">
            <span className = "mr-2">
              <span className = "titleText">
                current products  
              </span> 
              <DownWrapper className = "fas fa-chevron-circle-down" />

            </span>
          </h1>
        </TitleWrapper>
      </div>
    );
  }
}


const DownWrapper = styled.i`
  font-size: 1.5rem;
  width: 24px !important;
  height: 12px !important;
`

const TitleWrapper = styled.div`
  cursor: pointer;
  transition: all .15s ease-in-out;
  .titleText {
    margin: .5rem;
    transition: all .15s ease-in-out;
    border: .15rem solid var(--mainLight);
    border-width: 0rem 0rem 0.1rem 0rem;
  }
  .fas {
    color: var(--mainLight);
    transition: all .15s ease-in-out;
  }
  &:hover {
    .titleText {
      border-color: var(--pink);
    }
    .fas {
      color: var(--pink);
    }
  }
`
