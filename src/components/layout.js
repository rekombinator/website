import 'bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"

import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const layout = ({children}) => {
  return (
    <>
      <Navbar/>
      <StyledContainer>
        {children}
      </StyledContainer>
      <Footer/>
    </>
  )
};

const StyledContainer = styled(Container)`
padding-top: 2rem;
padding-bottom: 2rem;
`

export default layout
