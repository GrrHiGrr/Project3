import React from 'react'
import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react/cjs/react.production.min'


const Container = styled.div`
width:100%;
height:100vh;
display: flex;
position:relative;
overflow:hidden;
`

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(0vw);
`

const Slide = styled.div`
width:100vw;
height:100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%;
`


const InfoContainer = styled.div`
flex:1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;

`

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:#ffffff;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Slider = () => {


  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd"> 
            <ImgContainer>

                <Image src="https://cdn2.picryl.com/photo/2015/05/01/woman-shopping-lv-401bca-1024.jpg" />

            </ImgContainer>

            <InfoContainer>
                <Title>SPRING SALE</Title>
                <Desc>Don't compromise on style, get 20% off ALL luxury bags!</Desc>
                <Button>SHOW NOW</Button>
            
            </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed"> 
            <ImgContainer>

                <Image src="https://cdn2.picryl.com/photo/2015/05/01/woman-shopping-lv-401bca-1024.jpg" />

            </ImgContainer>

            <InfoContainer>
                <Title>Summer Sale!</Title>
                <Desc>Don't compromise on style, get 20% off ALL luxury bags!</Desc>
                <Button>SHOW NOW</Button>
            
            </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4"> 
            <ImgContainer>

                <Image src="https://cdn2.picryl.com/photo/2015/05/01/woman-shopping-lv-401bca-1024.jpg" />

            </ImgContainer>

            <InfoContainer>
                <Title>Summer Sale!</Title>
                <Desc>Don't compromise on style, get 20% off ALL luxury bags!</Desc>
                <Button>SHOW NOW</Button>
            
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
        </Container>
  )
}

export default Slider
