import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    margin-left: 5rem;
    margin-right: 5rem;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    padding: 50px;
`

const Right = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 0 40px;
    height: 60vh;
    margin-top: 50px;
`

const Button = styled.button`
    width: 100%;
    padding: 8px;
    align-items: center;
    margin: auto;
    margin-top: 100px;
    background-color: #f4d078;
    color: black;
    font-weight: 600;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
    background-color: #F5C06A;
    
  }
    
`



const Title = styled.h2`
    font-weight: 400;
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

    const { cart, setCart } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);

    const caculateShipping = (cart) => {
        let res = 0;
        cart.forEach(ele => {
            res += ele.number;
        })
        return res * 10;
    }

    const caculateSubtotal = (cart) => {
        let res = 0;
        cart.forEach(ele => {
            res += ele.number * parseInt(ele.price.substring(1))
        })
        return res;
    }

    useEffect(() => {
        setSubtotal(caculateSubtotal(cart));
        setShippingFee(caculateShipping(cart));
        setTotal(subtotal + shippingFee);
    }, [cart, subtotal, shippingFee])
    return (
        <Container>
            <Navbar></Navbar>
            <Wrapper>
                <Left>
                    <Title>
                        Shopping Cart
                    </Title>
                    {cart.length !== 0
                        && cart.map(item => <ShoppingCartItem
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
                    <hr />
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
            <Footer />
        </Container>
    )
}
