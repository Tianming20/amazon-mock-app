import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShoppingCartItem from '../components/ShoppingCartItem'
import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../context/CartContext'
import { QrCodeScannerOutlined } from '@mui/icons-material'


const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    padding: 50px;
`

const Right = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    margin-top: 60px;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #FFA500;
    color: black;
    font-weight: 600;
    border-radius: 20px;
    border: none;
    &:hover {
        background-color: grey;
      }
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const SummaryItem = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-between;
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

export default function Cart() {

    const {cart, setCart} = useContext(CartContext);
    const [subtotal, setSubtotal]= useState(0);
    const [total, setTotal] = useState(0);
    const [shippingFee, setShippingFee] = useState(0); 
    
    const caculateShipping = (cart) => {
        let res = 0;
         cart.forEach(ele=>{
            res += ele.number; 
         })
         return res*10;
    }

    const caculateSubtotal = (cart) => {
        let res = 0;
         cart.forEach(ele=>{
            res += ele.number * parseInt(ele.price.substring(1))
         })
         return res;
    }

    useEffect(()=>{
        setSubtotal(caculateSubtotal(cart));
        setShippingFee(caculateShipping(cart));
        setTotal(subtotal+shippingFee);
    },[cart,subtotal,shippingFee])
  return (
    <Container>
        <Navbar></Navbar>
        <Wrapper>
            <Left>
                <Title>
                    Shopping Cart
                </Title>
                {cart.length!==0 
                && cart.map(item=><ShoppingCartItem 
                    item={item} key={item.id} cart={cart} setCart={setCart}>
                </ShoppingCartItem>)}
            </Left>
            <Right>
                <Title>Order Summary</Title>
                <SummaryItem>
                    <SummaryItemText>
                        Subtotal
                    </SummaryItemText>
                    <SummaryItemPrice>
                        $ {subtotal}
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
                    Estimated Shipping
                    </SummaryItemText>
                    <SummaryItemPrice>
                        $ {shippingFee}
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
                        Total
                    </SummaryItemText>
                    <SummaryItemPrice>
                        $ {total}
                    </SummaryItemPrice>
                </SummaryItem>
                <Button>Check Out</Button>
            </Right>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}
