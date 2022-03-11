import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

import { GitHub, MailOutline, Phone, Room } from '@material-ui/icons';

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;

`

const SocialIcon = styled.div`
border-radius: 50%;
color: #001429;

&:hover {
    color: gray;
}
`

const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
${mobile({display: "none"})}
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
${mobile({display: "none"})}
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "#eee"})}

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`





const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
            OURSTORE.
            </Logo>
            <Desc>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos minima fugit iste id, 
labore delectus. Ducimus, vel iure. Pariatur maiores perferendis eos dolorem sunt quos, 
iure minus eveniet consequuntur?

            </Desc>

            <SocialContainer>
                <SocialIcon>
                <GitHub/>
                </SocialIcon>
            </SocialContainer>

        </Left>

        <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Terms and Conditions</ListItem>
        </List>

        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <Room style={{marginRight:"10px"}}/>
            7077 Store Ln 
            Storeia CA, 92867
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}}/>
            +1 (888) 888-8888  
            </ContactItem>
            <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>
            contact@contact.com
            </ContactItem>
        </Right>

    </Container>
  )
}

export default Footer
