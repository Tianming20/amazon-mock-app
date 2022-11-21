
import styled from 'styled-components'
import { popularProducts } from '../data'
import { useState, useEffect } from 'react';



const Container = styled.div`
    padding: 0px 30px;
    height: 600px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    &:hover {
    background-color: #F5F5F5;
  }
`

const Image = styled.img`
    height: 40%;  
    width: 240px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
    transform: scale(1.05);
  }
`

const Title = styled.div`
    margin-top: 3rem;
    display: flex;
    /* justify-content: center; */
`

const Price = styled.div`
  display: flex;
  font-size: 21px;
  margin-top: 10px;
  font-weight: 500;
  /* justify-content: center; */
`

const Button = styled.button`
  border-radius: 4px;
  margin-top: 50px;
  font-size: 14px;
  background-color: #f4d078;
  height: 35px;
  color: black;
  border-style: solid;
    border-width: 1px;
    border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
  &:hover {
    background-color: #F5C06A;
    
  }
`



export default function Product({ item, cart, setCart }) {
  const text = "Add To Cart"
  const [buttonText, setButtonText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text);
    }, 1000);
    return () => clearTimeout(timer);
  }, [buttonText])

  const handleClick = (addItemId) => {
    setButtonText("Item added!")
    if (cart.findIndex(ele => ele.id === addItemId) !== -1) {

      const index = cart.findIndex(ele => ele.id === addItemId);
      const num = cart[index].number;
      const newItem = { ...cart[index], number: num + 1 };
      const newCart = cart.map(ele => {
        if (ele.id === addItemId) {
          return newItem;
        } else {
          return ele;
        }
      })
      setCart(newCart)
    } else {
      const [newAddItem] = popularProducts.filter(ele => ele.id === addItemId);
      setCart([...cart, { ...newAddItem, number: 1 }]);
    }

  }

  return (
    <Container>
      <Image src={item.img} />
      <Title>{item.name}</Title>
      <Price>{item.price}</Price>
      <Button onClick={() => handleClick(item.id)}>{buttonText}</Button>
    </Container>
  )
}
