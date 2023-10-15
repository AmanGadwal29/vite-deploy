import React from 'react'
import styled from "styled-components"
const Contact_me = () => {
  return (
    <Contact>
       <div className='contactbox' id='contact' >
        <div className='reshead' ><h2>Resume</h2></div>
        
        <a href = "./images/AmanResume2.pdf" download  >  
 <p> Click here to download resume </p>  
</a>  
        <img className='resImage' src="./images/res.jpg" alt="" />

       </div>
    </Contact>
  )
}

export default Contact_me

const Contact=styled.div`
padding-top: 70px;
.contactbox{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.reshead{
  display: flex;
    height: 80px;
    background-color: #1b1951;
    box-shadow: 4px 4px 15px  #8f8e90,-4px -4px 15px  #8e8d8f;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;

}
h2{
  font-size: 40px;
  color: white;
  font-family: 'Signika Negative', sans-serif;
  
}
    .resImage{
      margin-top: 30px;
      margin-bottom: 30px;
      border-radius: 20px;
      height: 95vh;
    }
  
    a{text-decoration:none;
      color: white;
      font-family: sans-serif;
      background-color: #ca0ceb8f;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 2px 2px 4px  #f6f5f78f,-2px -2px 4px  #f6f5f78f,-2px 2px 4px  #f6f5f78f,2px -2px 4px  #f6f5f78f;
    }
    @media screen and (max-width: 1050px){
      .resImage{
        width: 95%;
        height: auto;
      }
    }
`