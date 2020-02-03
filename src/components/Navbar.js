import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3">
        <Link to="/">
          <LogoContainer
            width="52"
            height="52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>background</title>
              <rect
                fill="none"
                id="canvas_background"
                height="54"
                width="54"
                y="-1"
                x="-1"
              />
            </g>

            <g>
              <title>Layer 1</title>
              <polygon
                id="svg_2"
                className="shape"
                fill="#f8f4e3"
                points="33.77591013908386,32.17220139503479 26.77291178703308,44.863197565078735 26.77291178703308,51.14520287513733 40.27591013908386,36.09919762611389 "
              />
              <polygon
                id="svg_3"
                className="shape"
                fill="#f8f4e3"
                points="35.08591151237488,21.67319893836975 42.62491297721863,35.113197565078735 47.62091135978699,38.13020348548889 40.66891169548035,18.30219864845276 "
              />
              <polygon
                id="svg_5"
                className="shape"
                fill="#f8f4e3"
                points="17.69391131401062,20.057199716567993 24.702912092208862,7.3702003955841064 24.702912092208862,1.1451997756958008 11.474911451339722,16.30120015144348 "
              />
              <polygon
                id="svg_6"
                className="shape"
                fill="#f8f4e3"
                points="3.9459118843078613,14.159199953079224 11.280911207199097,33.6502001285553 16.703911542892456,30.37820267677307 9.126911401748657,17.28719925880432 "
              />
              <path
                id="svg_7"
                className="shape"
                fill="#f8f4e3"
                d="m10.760911,36.3682l-5.936,3.582l12.426,2.141l0,0.01l7.452,1.281l0,-6.997l-13.891,-0.009c-0.018,0 -0.033,-0.007 -0.051,-0.008z"
              />
              <polygon
                id="svg_8"
                className="shape"
                fill="#f8f4e3"
                points="44.837910413742065,23.941198587417603 47.79391169548035,14.000199556350708 42.4779098033905,17.21019959449768 "
              />
              <polygon
                id="svg_9"
                className="shape"
                fill="#f8f4e3"
                points="38.29891276359558,41.39119744300842 46.65391230583191,39.95020318031311 42.07391047477722,37.18420433998108 "
              />
              <polygon
                id="svg_10"
                className="shape"
                fill="#f8f4e3"
                points="26.77291178703308,17.902199029922485 26.77291178703308,24.288198709487915 37.34991145133972,17.902199029922485 "
              />
              <polygon
                id="svg_11"
                className="shape"
                fill="#f8f4e3"
                points="26.77291178703308,6.768200159072876 32.216912031173706,7.704199552536011 26.77291178703308,1.2261996865272522 "
              />
              <polygon
                id="svg_12"
                className="shape"
                fill="#f8f4e3"
                points="33.315911054611206,22.742199182510376 27.72791361808777,26.116199731826782 39.040913343429565,32.94920372962952 "
              />
              <polygon
                id="svg_13"
                className="shape"
                fill="#f8f4e3"
                points="26.77291178703308,40.58720421791077 32.005913496017456,31.10420060157776 26.77291178703308,27.944198846817017 "
              />
              <polygon
                id="svg_14"
                className="shape"
                fill="#f8f4e3"
                points="24.702912092208862,50.91919732093811 24.702912092208862,45.46620202064514 19.590912580490112,44.58720421791077 "
              />
              <path
                id="svg_15"
                className="shape"
                fill="#f8f4e3"
                d="m18.636911,31.6162l-4.489,2.708l10.555,0.007l0,-6.389l-5.958,3.598c-0.034,0.027 -0.07,0.052 -0.108,0.076z"
              />
              <polygon
                id="svg_16"
                className="shape"
                fill="#f8f4e3"
                points="24.702912092208862,24.290199518203735 24.702912092208862,11.64319920539856 19.463911771774292,21.126199960708618 "
              />
              <polygon
                id="svg_17"
                className="shape"
                fill="#f8f4e3"
                points="23.745911359786987,26.116199731826782 12.795912504196167,19.503198862075806 18.468910932540894,29.303200006484985 "
              />
              <polygon
                id="svg_18"
                className="shape"
                fill="#f8f4e3"
                points="4.820911884307861,12.28320050239563 9.680911302566528,15.218199968338013 13.561911344528198,10.7722008228302 "
              />
              <polygon
                id="svg_19"
                className="shape"
                fill="#f8f4e3"
                points="7.064911127090454,28.318199396133423 3.7939114570617676,38.16819787025452 9.480911493301392,34.73720192909241 "
              />
              <polygon
                id="svg_4"
                className="shape"
                fill="#f8f4e3"
                points="46.65191340446472,12.284199953079224 34.63891291618347,10.215199708938599 34.63891291618347,10.20620083808899 26.77291178703308,8.853200197219849 26.77291178703308,15.848199129104614 40.75091242790222,15.848199129104614 "
              />
            </g>
          </LogoContainer>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              about
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" /> cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const LogoContainer = styled.svg`
  .shape {
    transform-origin: 27px 27px;
    transition: all 0.1s ease-in-out;
    &:hover {
      fill: var(--pink);
    }
  }
`;

const ButtonContainer = styled.button`
  color: var(--mainLight);
  font-size: 1.4rem;
  font-family: "brandonLight";
  background: transparent;
  border: 0.05rem solid var(--mainDark);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: var(--pink);
  }
  &:focus {
    outline: none;
  }
`;

const NavWrapper = styled.nav`
  margin-bottom: 0px;
  background: var(--mainDark);
  .nav-link {
    font-family: "brandonLight";
    border-color: var(--mainDark);
    border-style: solid;
    border-width: 0rem 0rem 0.05rem 0rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    color: var(--gray) !important;
    transition: border-color 0.3s ease-in-out, background 0.05s ease-out;
    font-size: 1.2rem;
    &:hover {
      border-color: var(--pink);
    }
  }
`;
