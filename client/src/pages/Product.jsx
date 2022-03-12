import { Add, Remove } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

const Container=styled.div`
`

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection: "column", padding: "10px"})}
`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
  margin:20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
display: flex;
width: 50%;
margin:30px 0px;
${mobile({width: "100%"})}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 50%;
${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid maroon;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid maroon;
  background-color: white;
  cursor: pointer;
  font-weight: 1000;
  transition: all 0.5s ease;
  &:hover{
    background-color: #ECECEC;
  }
`


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  

  useEffect(()=>{
    const getProduct = async ()=>{
      try{
        const res = await publicRequest.get("/products/find/"+id)
        setProduct(res.data);
        
      }catch{}
    }
    getProduct();
  }, [id])
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src = {product.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>
          {product.title}
          </Title>
          <Desc>
        {product.desc}
          </Desc>

          <Price>
          {product.price}
          </Price>
        <FilterContainer>
          <Filter>
              <FilterTitle>
              Size
              </FilterTitle>
              <FilterSize>
              {product.size.map((s) => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
              </FilterSize>
          </Filter>
          
        </FilterContainer>

        <AddContainer>
          <AmountContainer>
            <Remove/>
            <Amount>{quantity}</Amount>
            <Add/>
          </AmountContainer>
          <Button>Add To Cart</Button>

        </AddContainer>
          

        </InfoContainer>

      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product