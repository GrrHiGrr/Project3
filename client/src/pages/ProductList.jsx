
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  // const [filters, setFilters] = useState('All Products');
  // const [sort, setSort] = useState('Newest');

 


  return (
    <Container>
        
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        {/* <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select onChange={e=>setFilters(e.target.value)}>
            <Option value='clothes'>
                All Products
            </Option>
            <Option value='hat'>Hats</Option>
            <Option value='Shirts'>Shirts</Option>
            <Option value='man'>Men's</Option>
            <Option value='woman'>Women's</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value='Newest'>Newest</Option>
                <Option value='asc'>Price (low to high)</Option>
                <Option value='desc'>Price (high to low)</Option>
            </Select>
            </Filter>
        </FilterContainer> */}
        <Products/>
        <Newsletter/>
        <Footer/>
        
    </Container>
  )
}

export default ProductList