import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import menu from '../components/menu';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1250px;
  padding-top: 15px;
`;



const Menu = styled.ul`
  list-style-type: none;
  max-width: 585px;
  @media (min-width: 820px) {
    width: 63%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
  }
`;







const linkStyles = {
  textDecoration: "none",
  margin: 0,
  outline: 0
};

class Navbar extends React.Component {
    render() {
      return (
        <Header>
          
       
            <Menu>
              <Link to="/" style={linkStyles}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/about/" style={linkStyles}>
                <MenuItem>About</MenuItem>
              </Link>
            
              <Link to="/projects/" style={linkStyles}>
                <MenuItem>Blog</MenuItem>
              </Link>
              {/* <a href="#">Portfolio</a> */}
              <HamButton
                onClick={this.props.action}
                src={require("../images/icons/menu-options.svg")}
                alt="menu button"
              />
            </Menu>
          
        </Header>
      );
    }
  }

  export default Navbar;
