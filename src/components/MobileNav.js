import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileLink = styled.span`
  font-family: "Montserrat", "Helvetica", sans-serif;
  text-transform: uppercase;
  color: #353535;
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 28px;
`;

const CloseButton = styled.img`
  align-self: flex-end;
  height: 40px;
  width: auto;
  padding: 20px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const BlackLogo = styled.img`
  height: 40px;
  width: auto;
`;

const linkStyles = {
  textDecoration: "none",
  margin: "9px",
  outline: 0
};

class MobileNav extends React.Component {
  render() {
    return (
      <SideNav
        style={this.props.open ? { width: 100 + "%" } : { width: 0 + "px" }}
      >
        <CloseButton
          onClick={this.props.action}
          id="closeButton"
          src={require("../images/icons/delete-button.svg")}
          href="javascript:void(0)"
        />
        <Link to="/" style={linkStyles}>
          <BlackLogo
            src={require("../images/JacobDCastro-black.png")}
            alt="logo"
          />
        </Link>
        <Link to="/" style={linkStyles}>
          <MobileLink>Home</MobileLink>
        </Link>
        <Link to="/about/" style={linkStyles}>
          <MobileLink>About</MobileLink>
        </Link>
        <Link to="/blog/" style={linkStyles}>
          <MobileLink>Blog</MobileLink>
        </Link>
        {/* <Link  href="#">Portfolio</Link> */}
        <Link to="/contact" style={linkStyles}>
          <MobileLink>Contact</MobileLink>
        </Link>
      </SideNav>
    );
  }
}

export default MobileNav;