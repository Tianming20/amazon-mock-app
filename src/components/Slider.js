import React from 'react'
import { useState } from 'react'; 
import styled from 'styled-components'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { sliderItems } from '../data'
import SliderItem from './SliderItem';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props)=>props.direction === "left" && "10px"};
  right: ${(props)=>props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props)=>props.sliderIndex*-100}vw);
  transition: all 0.3s ease;
`


export default function Slider() {

  const [sliderIndex, setslideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction === "left"){
      setslideIndex(sliderIndex > 0 ? sliderIndex - 1 : 3)
    } else {
      setslideIndex(sliderIndex < 3 ? sliderIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <KeyboardDoubleArrowLeftIcon />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map(item=><SliderItem item={item} key={item.id}/>)}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <KeyboardDoubleArrowRightIcon />
      </Arrow>
    </Container>
  )
}
