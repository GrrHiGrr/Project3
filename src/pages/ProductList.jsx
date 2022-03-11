
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
${mobile({margin: "0px 20px"})}

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px"})}
`
const Option = styled.option`

`



const ProductList = () => {
  return (
    <Container>
        
        <Navbar />
        <Announcement />
        <Title>Work/School</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
            <Option>
                All Products
            </Option>
            <Option>Computers</Option>
            <Option>Computer Accessories</Option>
            <Option>Notebooks/Planners</Option>
            <Option>Writing Utensils</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (low to high)</Option>
                <Option>Price (high to low)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
        
    </Container>
  )
}

export default ProductList