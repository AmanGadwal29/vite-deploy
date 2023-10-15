import React from 'react'
import styled from 'styled-components'
const Project = () => {
  return (
    <Projects>
        <div className="projectSection">
            <div className="proheading"><h1>Projects</h1></div>  
            <div className="main">
                <div className='toppro'>
                     <div className='leftpro' >
                        <div className="proimage">
                            <img src="./images/dice.png" alt="" />
                        </div>
                        <div className="projdisc">
                            <h3>Dice Game</h3>
                            <p>Introducing ”Dice It Right,” a 
                                thrilling and engaging dice 
                                game created with React that
                                 will test your luck
                            </p>
                            <div className="links">
                                <ul>
                                    <li> <a href="/">Github link</a> </li>
                                    <li> <a href="/">Website Link</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <div className='rightpro'>
                   <div className="proimage">
                            <img src="./images/calc.png" alt="" />
                        </div>
                        <div className="projdisc">
                            <h3>Calculator</h3>
                            <p>Made a fully responsive calculator using HTML, CSS, & JavaScript, demonstrating strong
front-end skills.
                            </p>
                            <div className="links">
                                <ul>
                                    <li> <a href="https://github.com/AmanGadwal29/calculator" target="_blank">Github link</a> </li>
                                    <li> <a href="https://amangadwal29.github.io/calculator/" target="_blank">Website Link</a> </li>
                                </ul>
                            </div>
                        </div>
                   </div>
              </div>
    
              <div className='downpro'>
                  <div className='leftpro' >
                  <div className="proimage">
                            <img src="./images/camm.png" alt="" />
                        </div>
                        <div className="projdisc">
                            <h3> Photography  </h3>
                            <p>Designed a website for “AVTAR FILMS AND PHOTOGRAPHY” (HTML,CSS,JavaScript, Bootstrap)
                            </p>
                            <div className="links">
                                <ul>
                                    <li> <a href="https://github.com/AmanGadwal29/AvtarPhotography" target="_blank" >Github link</a> </li>
                                    <li> <a href="https://amangadwal29.github.io/AvtarPhotography/" target="_blank">Website Link</a> </li>
                                </ul>
                            </div>
                        </div>
                  </div>
                  <div className='rightpro'>
                  <div className="proimage">
                            <img src="./images/form.jpg" alt="" />
                        </div>
                        <div className="projdisc">
                            <h3>Form Validation</h3>
                            <p>Created custom JavaScript validation functions for real-time input data validation and feedback.
                            </p>
                            <div className="links">
                                <ul>
                                    <li> <a href="https://github.com/AmanGadwal29/Form_Validation" target="_blank">Github link</a> </li>
                                    <li> <a href="https://amangadwal29.github.io/Form_Validation/"target="_blank">Website Link</a> </li>
                                </ul>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
            
        </div>
    </Projects>
  )
}

export default Project

const Projects = styled.div`
padding-top: 70px;
  .proheading{
    display: flex;
    height: 80px;
    background-color: #1b1951;
    box-shadow: 4px 4px 15px  #8f8e90,-4px -4px 15px  #8e8d8f;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    
  }
    h1{ 
       
        font-size: 45px;
        color: #ffffff;
        border-radius: 10px;
        padding: 20px 0px;
        font-family: 'Signika Negative', sans-serif;
    }

    .main{
        display: flex;
        justify-content: center;
    }
     
    .toppro,.downpro{
        display: flex;
    }

    .leftpro,.rightpro{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:20px;
        width:320px;
        height: 500px;
        background-color:white;
        border-radius: 25px;
        background-color: #ffffff4a;
        border: 2px solid  #c7c7c7;
        box-shadow: 5px 5px 6px  #c7c7c7,-3px -3px 8px  #000000
    }

    .proimage{
        display: flex;
        justify-content: center;
        align-items: center;
        width:85%;
        height: 40%;
        background-color: #ffffff;
        margin-top: 20px;
        border-radius: 10px;
        /* border: 2px solid gray; */
        box-shadow: 3px 3px 8px  #000000,-3px -3px 8px  #000000
    }
    .proimage>img{
        height:90%
    }

    .projdisc{
        margin: 20px 0;
        width:290px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    h3{
        font-size: 40px;
        font-family: 'Signika Negative', sans-serif;
        color: white;
        text-shadow: 5px 5px 5px black;
    }
    p{   
        margin: 10px 0px;
        padding: 10px;
        font-size: 16px;
        color: white;
        background-color: #0000003c;
        border-radius: 8px;
        font-family: sans-serif;
     
    }

    .links{
        margin: 5px 5px;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width:180px;
        height: 30px;
        background-color: #1102379b;
        margin: 15px 0;
        border-radius: 8px;
        box-shadow: 2px 2px 3px  #ffffff83,-2px -2px 3px  #000000;
        transition: 0.3s all;
    }
    li>a{
        text-decoration: none;
        color: white;  
     
        font-family:   sans-serif;
    }
    li:hover{
        background-color: #2c0f74;
    }

    @media screen and (max-width: 1500px) and (min-width: 750px)  {
        .projectsection{

        }
        .main{
            flex-direction: column;
            align-items: center;
        }
    }
    @media screen and (max-width: 750px){
        .toppro,.downpro,.main{
            display: flex;
            flex-direction: column;
        }
        .main{
            align-items: center;
        }
    }
    @media screen and (max-width: 450px){
        .leftpro,.rightpro{
            margin:  20px 5px ;
        }
    }
`