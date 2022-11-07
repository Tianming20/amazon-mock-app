import {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from "./Product"
import { CategoryContext } from '../context/CategoryContext'
import { CartContext } from '../context/CartContext'

const Container = styled.div`
  background-color: #F0F8FF;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 150px;
  position: relative;
  ;
`

export default function Products() {

  const {category, setCategory} = useContext(CategoryContext);
  const [list, setList] = useState(popularProducts);
  const {cart, setCart} = useContext(CartContext);

  useEffect(()=>{
    let newList;
    if(category === "All"){
      newList = popularProducts;
    } else {
      newList = popularProducts.filter(ele => ele.category === category)
    }
    setList(newList);
  },[category])

  useEffect(()=>{
    setList(popularProducts);
  },[])

  return (
    <Container>
      {list.map(item=>
        <Product item={item} key={item.id} cart={cart} setCart={setCart}/>
      )}
    </Container>
  )
}
