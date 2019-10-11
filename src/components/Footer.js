import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
// import { EDEADLK } from 'constants';

const FooterContainer = styled.footer`
    text-align: center;
    `;

const SocialIcons = styled.div`
    width: 200px;
    margin: 38px auto 10px;
    padding-bottom: 0;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: center ;
    `;

const IconLink = styled.a`
    text-decoration: none;
    outline: 0;
    @media (min-width: 420px) {
        width: 320px;
    }
    `;

const Icon = styled.img`
    height: 30 px;
    width: auto;
    transition: 0.23s;
    &:hover {
        transform: template(0px, -6px);
    }
    `;

const Copyright = styled.h5`
    font-family: "Montserrat", "Helvetica", sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 2px;
    margin: 14px auto;
    `;
const linkStyles = {
    height: "33px",
    width: "33px",
    padding: "0",
    margin: "0"
};

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <SocialIcons>
                    <IconLink
                        style={linkStyles}
                        href="https://github.com/tomroman"
                        target="_blank"
                    >

                        <Icon
                            style={linkStyles}
                            src={
                                this.props.backgroundIsBlack
                                    ? require("../images/icons/github-logo-white.svg")
                                    : require("../images/icons/github-logo-black.svg")
                            }
                            alt="Github"
                        />

                    </IconLink>
                    <IconLink
                        style={linkStyles}
                        href="https://www.linkedin.com/in/thomas-roman-132247191/"
                        target="_blank"
                    >
                        <Icon
                            style={linkStyles}
                            src={
                                this.props.backgroundIsBlack
                                    ? require("../images/icons/linkedin-logo-white.svg")
                                    : require("../images/icons/linkedin-logo-black.svg")
                                    
                            }
                            alt="Linkedin"
                        />
                    </IconLink>

                </SocialIcons>
                <Copyright
                    style={
                        this.props.backgroundIsBlack
                            ? { color: "white" }
                            : { color: "black" }
                    }
                >
                    &copy; Thomas Roman - 2019
        </Copyright>
            </FooterContainer>
        )
    }
}
export default Footer