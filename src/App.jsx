
import './App.css'
import MainBody from './components/MainBody'
import Navbar from "./components/Navbar.jsx"
import styled from "styled-components"
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact_me from './components/Contact_me'
import Footer_sec from './components/Footer_sec'
import { Link, Element } from 'react-scroll';
 

 

function App() {
  

  return (
     <Port>
    <div className="portfoliooo">

 {/* header */}
      <header>
        <Navbar/> 
      </header>

 {/* main body */}

     <main>
      <Element name="mainbody" ><MainBody/></Element>
      <Element name="aboutme" ><AboutMe/></Element>
      <Element name="projects" ><Project/></Element>
      <Element name="contactme" > <Contact_me/></Element>
       
       
       
      
       
     </main>
     <footer>
     <Footer_sec/>
     </footer>
     
    </div>
      
    
    </Port>
  
  )
}

export default App

const Port=styled.div`
  .portfoliooo{
    background-color: #01011e;
    background-image: linear-gradient(#01011490,#010115b6), url(/images/background.jpg);
    background-repeat: no-repeat;
   background-size: cover;
 
  }
`