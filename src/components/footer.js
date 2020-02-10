import React from "react";
import styled from "styled-components";
import {graphql, StaticQuery} from "gatsby";
import {FaFacebookSquare, FaMapMarkerAlt} from "react-icons/fa";
import Img from "gatsby-image"
import {IoMdCall} from "react-icons/all";


const Footer = () => (
  <StaticQuery
    query={graphql`
 query navigationImage {
    file: file(relativePath: { eq: "stadion.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
    `}
    render={data => {
      console.log('data', data);
      return (
        <FooterRoot>
          <div 
            className="container d-flex justify-content-lg-center
            align-items-lg-center flex-column flex-lg-row py-3 py-lg-5">

            <div className="d-flex flex-column pr-lg-5">
              <h5 className="m-1">Social media </h5>
              <FacebookLink href={"https://www.facebook.com/gorkaszczerez/"}>
                <FaFacebookSquare/>
              </FacebookLink>
            </div>

            <div className="d-flex flex-column pr-lg-5">
              <h5 className="m-1 mt-2">Adres </h5>
              <p>
                <span className="pr-1">
                  <FaMapMarkerAlt/>
                </span>
                Szczereż 88, 33-390 Łącko
              </p>

              <h5 className="m-1 mt-2"> Kontakt </h5>
              <p>
                <span className="pr-1">
                  <IoMdCall/>
                </span>
                +48 777 888 999
              </p>
              
            </div>
            

            <div className="cursor-ptr"> 
              <NavigationImageContainer>
                <h5 className="m-1 mt-2"> Jak dojechać?</h5>
                <a href={"https://www.google.com/maps/dir//Stadion+LKS+G%C3%B3rka+Szczere%C5%BC,+33-386/@49.5676556,20.4943205,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473dff9327502669:0x852493527fabafe8!2m2!1d20.4965145!2d49.5676556"}
                   >
                <Img fluid={data.file.childImageSharp.fluid} />
                  
                </a>
              </NavigationImageContainer>
            </div>

          </div>
        </FooterRoot>
      )
    }}
  />
);

const NavigationImageContainer = styled.div`
  @media only screen and (min-width: 992px) { 
    width: 350px;
  }
  
    @media only screen and (max-width: 992px) { 
   width: 100%;
  }
`

const FooterRoot = styled.div`
  background-color: var(--mainBlack);
  color: var(--mainWhite);
`


const FacebookLink = styled.a`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: -0.3rem;
  color: var(--mainWhite);
    &:hover,
    &:focus {
      opacity: var(--mainOpacity);
      color: var(--mainWhite)
  }
`;

export default Footer;