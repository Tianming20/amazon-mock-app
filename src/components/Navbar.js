import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";


const Wrapper = styled.div`
  padding-left: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00055A;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Medium = styled.div`
  flex: 1;
  margin-right: 20em;
  display: flex;
  height: 100%;
  align-items: center;
`

const Right = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-left: 150px;
  padding-right: 80px;
`

const Logo = styled.h2`
  font-weight: bold;
  color: white;
  cursor: pointer;
`

const Language = styled.span`
  font-size: 25px;
  cursor: pointer; 
  color: white;
`
const SearchContainer = styled.div`
  border: 0.5px lightgray solid;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
  width: 100%;
`

const Input = styled.input`
  border: none;
  width: 100%;
 
`

const Button = styled.button`
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;
  padding: 12px;
  border: none;
  background: none;
  color: white;
  &:hover{
   border: 1px solid #d0d0d0;
   border-radius: 3px;
}
`

export default function Navbar() {

  const navigate = useNavigate();
  const { userInfo, setUserInfo, isAuth, setIsAuth } = useContext(UserContext);
  const handleClick = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      navigate("/login");
      setIsAuth(prev => !prev)
    }
  }
  return (
    <>
      <Wrapper>
        <Left>
          <Logo onClick={() => { navigate("/") }}>
            Title
          </Logo>
          {/* <Language>
            English
          </Language> */}
        </Left>
        <Medium>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "white" }} />
          </SearchContainer>
        </Medium>
        <Right>
          <Button onClick={handleClick}>{isAuth ? "Sign Out" : "Sign In"}</Button>
          <Button onClick={() => { navigate("/register") }}>Register</Button>
          <Button onClick={() => { navigate("/sell") }}>Selling</Button>
          <Button onClick={() => { navigate("/checkout") }}>Cart</Button>
        </Right>
      </Wrapper>
    </>
  )
}
