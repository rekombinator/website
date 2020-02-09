import styled from "styled-components";
import React from "react";

const MenuIcon = styled.div`
  width: 30px;  
  display: flex;
  align-items: center;
  
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  margin-left: auto;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

const MenuIconPartI = styled.span`
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: var(--mainWhite);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: .25s ease-in-out;
 
  top: ${props => props.isOpen ? "8px" : "0px"};
  transform: ${props => props.isOpen ? "rotate(135deg)" : "rotate(0deg)"};
`

const MenuIconPartII = styled.span`
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: var(--mainWhite);
  border-radius: 9px;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
  top: 10px;
  
  left: ${props => props.isOpen ? "-60px" : "0px"};
  opacity: ${props => props.isOpen ? "0" : "1"};
`

const MenuIconPartIII = styled.span`
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: var(--mainWhite);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: .25s ease-in-out;
  
  top: ${props => props.isOpen ? "8px" : "20px"};
  transform: ${props => props.isOpen ? "rotate(-135deg)" : "rotate(0deg)"};
`


const MenuButton = (props) => {
  console.log('props', props);
  return (
    <MenuIcon onClick={props.toggleNav}>
      <MenuIconPartI isOpen={props.isOpen}/>
      <MenuIconPartII isOpen={props.isOpen}/>
      <MenuIconPartIII isOpen={props.isOpen}/>
    </MenuIcon>
  )
}


export default MenuButton;