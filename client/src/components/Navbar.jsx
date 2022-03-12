import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {mobile} from '../responsive'

const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content: space-between;
`

const Left = styled.div`
flex:1;
align-items: center;
display:flex;
`
const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile({display: "none"})}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
`

const Input = styled.input`
border: none;
${mobile({width: "50px"})}
`


const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "24px", margin: "0px 10px"})}
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
     <Wrapper>
        <Left> <Language>EN</Language> 
        <SearchContainer>
            <Input placeholder="search"/>
            <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>
        </Left>
        
        <Center> <Logo>OURSTORE.</Logo> </Center>
        <Right> 
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem><Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
            </Badge></MenuItem>
         </Right>

     </Wrapper>
    </Container>
  )
}

export default Navbar
