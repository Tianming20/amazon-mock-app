import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #143D9C;
  color: white;
  padding-bottom: 80px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 160px;
`
const Title = styled.h1`
  font-size: 30px;
`
const List = styled.ul`
  width: 100%;
`
const ListItem = styled.li`
  display: flex;
  padding-top: 10px;
`

const Medium = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`


export default function Footer() {
  return (
    <Container>
      <Left>
        <List>
          <Title>Buy</Title>
          <ListItem>Registration</ListItem>
          <ListItem>Money Back Guarantee</ListItem>
          <ListItem>Buying help</ListItem>
          <ListItem>Stores</ListItem>
          <ListItem>Returns</ListItem>
        </List>
      </Left>
      <Medium>
        <List>
          <Title>Sell</Title>
          <ListItem>Start selling</ListItem>
          <ListItem>How to sell</ListItem>
          <ListItem>Business sellers</ListItem>
          <ListItem>Affiliates</ListItem>
          <ListItem>Seller Center</ListItem>
        </List>
      </Medium>
      <Right>
        <List>
          <Title>Stay connected</Title>
          <ListItem>
            <FacebookIcon></FacebookIcon>
            Facebook
          </ListItem>
          <ListItem>
            <TwitterIcon></TwitterIcon>
            Twitter
          </ListItem>
          <ListItem>
            <InstagramIcon></InstagramIcon>
            Instagram
          </ListItem>
        </List>
      </Right>
    </Container>
  )
}
