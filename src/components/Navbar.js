import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1250px;
  padding-top: 15px;
`;

const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeadMenu = styled.ul`
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

const HeadLogo = styled.img`
  height: 45px;
  width: auto;
  padding: none;
  margin: none;
  float: left;
  @media (min-width: 820px) {
    padding-top: 5px;
    height: 55px;
    width: auto;
  }
`;

const HamButton = styled.img`
  height: 35px;
  width: auto;
  float: right;
  padding: none;
  margin: none;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 820px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-family: "Montserrat", "Helvetica", sans-serif;
  display: none;
  font-weight: 400;
  transition: 320ms;
  &:hover {
    border-bottom: solid 2.4px white;
  }
  @media (min-width: 820px) {
    font-size: 1.05em;
    font-weight: 700;
    display: inline;
    padding: 8px 0;
    padding-left: 4.75px;
    margin-left: 30px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 4.75px;
    border-bottom: solid 2.4px rgba(0, 0, 0, 0);
    align-self: flex-end;
  }
`;

const linkStyles = {
  textDecoration: "none",
  margin: 0,
  outline: 0
};