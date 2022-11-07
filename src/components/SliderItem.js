import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const Img = styled.img`
  height: 100%;
`

export default function SliderItem({item}) {
  return (
    <Container>
      <Img src={item.img} alt="slideImg"/>
    </Container>
  )
}
