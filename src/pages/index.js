import React from "react";
// import { Link } from "gatsby";


// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import styled from "styled-components";
import img from "../images/gatsby-icon.png"
import Layout from "../components/layout"


const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: auto 18%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background-color 0.5s;
  transition: margin-left 0.5s;
`;

const BlackLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainContent = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  @media (min-width: 820px) {
    font-size: 1.18rem;
  }
  @media (min-width: 1080px) {
    font-size: 1.29rem;
  }
  @media (min-width: 1400px) {
    font-size: 1.58rem;
  }
`;

const Text1 = styled.h1`
  font-family: "Montserrat", "Helvetica", sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 10px;
  @media (min-width: 820px) {
    letter-spacing: 14px;
    /* font-size: 2.42rem; */
  }
  @media (min-width: 1080px) {
    letter-spacing: 16px;
    /* font-size: 2.58em; */
  }
  @media (min-width: 1400px) {
    letter-spacing: 18px;
    /* font-size: 2.58em; */
  }
`;

const Text2 = styled.h4`
  font-family: "Montserrat", "Helvetica", sans-serif;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin: auto;
  width: 14em;
  padding: 12px 3px;
  border: 4px solid #ffffff;
  letter-spacing: 4px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ffffff;
    color: #353535;
    opacity: 0.86;
  }
  @media (min-width: 820px) {
    padding: 13px 4px;
    letter-spacing: 5px;
    /* font-size: 1.18rem; */
  }
  @media (min-width: 1080px) {
    padding: 13px 3px;
    letter-spacing: 6px;
    /* font-size: 1.29rem; */
  }
  @media (min-width: 1400px) {
    padding: 13.75px 4px;
    letter-spacing: 7.5px;
    /* font-size: 1.58rem; */
  }
`;

const linkStyles = {
  textDecoration: "none",
  margin: 0,
  outline: 0
};

class Index extends React.Component {




  render() {
    return (
      <Layout>
        <Container>



          <BlackLayer>
            <MainContent>
              
             


            </MainContent>
          </BlackLayer>
        </Container>
      </Layout>
    );
  }
}
export default Index;
