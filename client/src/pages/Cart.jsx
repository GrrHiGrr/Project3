import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove, StayPrimaryPortraitRounded } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom'


const KEY = process.env.REACT_APP_STRIPE;

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
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
  
    const onToken = (token) => {
      setStripeToken(token);
    };
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500,
          });
          history.push("/success", {
            stripeData: res.data,
            products: cart, });
        } catch {}
      };
      stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);

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
                {cart.products.map(product=>(<Product>
                    <ProductDetail>
                <Image src = {product.img}/>
                <Details>
                    <ProductName>
                        <b>Product: </b> {product.name}}
                    </ProductName>
                    <ProductID>
                        <b>ID: </b> {product.id}
                    </ProductID>
                    <ProductSize>
                        <b>Size: </b> {product.size}
                    </ProductSize>
                </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                    </PriceDetail>
                </Product>))}
                <Hr/>
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
${cart.total.toFixed(2)}
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
Estimated Shipping
                    </SummaryItemText>
                    <SummaryItemPrice>
                    ${(cart.total*.08).toFixed(2)}
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
Shipping Discount
                    </SummaryItemText>
                    <SummaryItemPrice>
                    -${(cart.total*.04).toFixed(2)}
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                    <SummaryItemText>
Total
                    </SummaryItemText>
                    <SummaryItemPrice>
$ {(cart.total + cart.total*0.04).toFixed(2)}
                    </SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
              name="-OURSTORE"
              image={process.env.PUBLIC_URL + '/logo.png'} alt="logo"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <BotButton>CHECKOUT NOW</BotButton>
            </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart
