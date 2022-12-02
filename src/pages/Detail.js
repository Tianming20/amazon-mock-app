import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useSelector } from "react-redux";
import { CartContext } from '../context/CartContext';
import { useState, useEffect, useContext } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  margin-left: 100px;
`;

const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
    margin-top: 30px;
  padding: 15px;
  border: 2px solid teal;
  background-color: #f4d078;
  color: black;
  cursor: pointer;
  font-weight: 600;
  border-radius: 16px;
  border-color: #a88734 #9c7e31 #846a29;
  font-weight: 500;
  &:hover {
    background-color: grey;
  }
`;

const Detail = () => {
    const product = useSelector(state => state.productDetail).productDetail
    const { cart, setCart } = useContext(CartContext);
    const text = "Add To Cart"
    const [buttonText, setButtonText] = useState(text);

    useEffect(() => {
        const timer = setTimeout(() => {
          setButtonText(text);
        }, 800);
        return () => clearTimeout(timer);
      }, [buttonText])
    
    const handleClick = () => {
        setButtonText("Item added!")
        if (cart.findIndex(ele => ele.id === product.id) !== -1) {
    
          const index = cart.findIndex(ele => ele.id === product.id);
          const num = cart[index].number;
          const newItem = { ...cart[index], number: num + 1 };
          const newCart = cart.map(ele => {
            if (ele.id === product.id) {
              return newItem;
            } else {
              return ele;
            }
          })
          setCart(newCart)
        } else {
          setCart([...cart, { ...product, number: 1 }]);
        }
    
      }
    return (
    <Container>
        <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.name}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>{product.price}</Price>
          <AddContainer>
            <Button onClick={handleClick}>{buttonText}</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Detail;