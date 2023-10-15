import React from 'react'
import styled from "styled-components"
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  return (
    <NavBox>
       <div className='navbarsection' >
        <div className='aman tracking-in-contract-bck ' >Aman's Portfolio</div>
        <div className='navitems  ' >
          <ul>
            <li> <Link to="mainbody" smooth duration={500}>Home</Link> </li>
            <li> <Link to="aboutme" smooth duration={500}>About</Link> </li>
            <li> <Link to="projects" smooth duration={500}>Projects</Link> </li>
            <li> <Link to="contactme" smooth duration={500}>Contact me</Link> </li>
          </ul>
        </div>
       </div>
    </NavBox>
   
  )
}

export default Navbar

const NavBox = styled.div`
  .navbarsection{
    position: fixed;
    height: 70px;
    width: 100%;
    margin-top: 0;
    background-color: #0d0d34;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    box-shadow: 0 2px 15px 0 #ffffff61;
  }
  .navitems>ul{
    display: flex;
  }
  ul>li{
    list-style: none;
    padding: 10px;
    font-family: sans-serif;
    font-weight: 520;
    color: white;
  }
  li>a{
    color: white;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 500;
  }
  li>a:hover {
    color: #bb86ed;
  }
  .aman{
    font-size: 1.7rem;
    /* font-weight: 500; */
    color: white;
    text-shadow: 2px 2px 4px black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  @media screen and (max-width: 750px){
    .navbarsection{
      flex-direction: column;
    }
  }
  
`