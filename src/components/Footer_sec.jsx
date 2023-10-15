import React from 'react'
import styled from "styled-components"
const Footer_sec = () => {
  return (
    <Foot>
        <div className='footerbox' >
            <div className='info' >
                <h4>Aman's Portfolio</h4>
                <p className='phno' >Contact Number : - +91 9015106615</p>
                <p className='mail'>Email : <a href = "mailto: amangadwal001@gmail.com">amangadwal001@gmail.com</a></p>
            </div>
            <div className='usefullLinks'>
                <h4>Useful Links</h4>
                 <ul>
                    <li> <a href="https://auth.geeksforgeeks.org/user/20beevxfl/practice" target="_blank" >Gfg</a> </li>
                    <li> <a href="https://www.linkedin.com/in/aman-gadwal-126639214/" target="_blank">Linkedin</a> </li>
                    <li> <a href="https://github.com/AmanGadwal29"target="_blank">Github</a> </li>
                 </ul>
            </div>
        </div>
        <div className='ending' >
            <p>© Copyright <b><em>Aman's Portfolio.</em></b>   All rights are reserved.</p>
        </div>
    </Foot>
   
  )
}

export default Footer_sec

const Foot = styled.div`
    .footerbox{
        display: flex;
        justify-content:space-around;
        margin-top :50px;
        /* height:200px; */
        background-color: #ffffff;
    }
    .info,.usefullLinks{
        display: flex;
        flex-direction:column;
        align-items: center;
        width: 40%;
        background-color: #ffffff;
        margin: 25px;
        font-family: sans-serif;
        color: #424141;
    }
    h4,.mail, .phno,li{
        margin: 10px;
    }
  a{
        text-decoration: none;
        color: #424141;
    }
    ul{
        margin-left: 25px;
    }
    li{
        list-style: square;
    }
    .ending{
        background-color: #dadcdc;
        height: 70px;
        display: flex;
        align-items: center;
    }
    .ending>p{
        margin: 0 40px;
    }
    @media screen and (max-width: 560px){
        .footerbox{
            flex-direction: column;
        }

        .info,.usefullLinks{
            width:100%;
            margin:0;
            padding: 0;
        }
    }

`
