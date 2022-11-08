import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Home() {

  return (
    <>
      <Container>
        <Navbar />
        <Category />
        <Slider />
        <Products />
        <Footer /> 
      </Container>
    </>
  )
}
