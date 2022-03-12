import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "teal" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
transition: all 0.4s ease;

&:hover{
    opacity: 0.6
}

`



const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`

const Info = styled.div`
flex:3;
`

const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
width: 180px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``

const ProductID = styled.span``

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 25px"})}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: "25px"})}
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 10px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "1000"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const BotButton = styled.button`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
background-color: black;
color: white;
font-weight: 1000;
margin: auto;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top><TopButton>
                    CONTINUE SHOPPING
                </TopButton>

                <TopButton type="filled" >
                    CHECKOUT
                </TopButton></Top>
            <Bottom>
                <Info>
                <Product>
                    <ProductDetail>
                <Image src = "https://via.placeholder.com/250"/>
                <Details>
                    <ProductName>
                        <b>Product: </b> Product Name
                    </ProductName>
                    <ProductID>
                        <b>ID: </b> 7777777
                    </ProductID>
                    <ProductSize>
                        <b>Size: </b> Product Size
                    </ProductSize>
                </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                <Image src = "https://via.placeholder.com/250"/>
                <Details>
                    <ProductName>
                        <b>Product: </b> Product Name
                    </ProductName>
                    <ProductID>
                        <b>ID: </b> 76767676
                    </ProductID>
                    <ProductSize>
                        <b>Size: </b> Product Size
                    </ProductSize>
                </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
                </Info>
                <Summary>
                <SummaryTitle>
ORDER SUMMARY
                </SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>
Subtotal
                    </SummaryItemText>
                    <SummaryItemPrice>
$ 40
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
Estimated Shipping
                    </SummaryItemText>
                    <SummaryItemPrice>
$ 6.85
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
Shipping Discount
                    </SummaryItemText>
                    <SummaryItemPrice>
-$ 6.85
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                    <SummaryItemText>
Total
                    </SummaryItemText>
                    <SummaryItemPrice>
$ 40
                    </SummaryItemPrice>
                </SummaryItem>

                <BotButton>CHECK OUT NOW</BotButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart
