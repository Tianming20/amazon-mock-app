import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import {useState, useContext} from 'react';
import { UserContext } from "../context/UserContext";

const Wrapper = styled.div`
  padding-left: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #191970;

`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Medium = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-left: 150px;
  padding-right: 150px;
`

const Logo = styled.h1`
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
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 100%;
`

const Input = styled.input`
  border: none;
  width: 100%;
`

const Button = styled.button`
  font-size: 35px;
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  color: white;
`

export default function Navbar() {

  const navigate = useNavigate();
  const {userInfo, setUserInfo, isAuth, setIsAuth} = useContext(UserContext);
  const handleClick = () => {
    if(!isAuth){
      navigate("/login");
    } else {
      navigate("/login");
      setIsAuth(prev=>!prev)
    }
  }
  return (
    <>
      <Wrapper>
        <Left>
          <Logo onClick={()=>{navigate("/")}}>
            Amazon
          </Logo>
          <Language>
            English
          </Language>
        </Left>
        <Medium>
          <SearchContainer>
            <Input />
            <SearchIcon color="secondary" />
          </SearchContainer>
        </Medium>
        <Right>
          <Button onClick={handleClick}>{isAuth?"Sign Out":"Sign In"}</Button>
          <Button onClick={()=>{navigate("/register")}}>Register</Button>
          <Button onClick={()=>{navigate("/upload")}}>Upload</Button>
          <Button onClick={()=>{navigate("/checkout")}}>Cart</Button>
        </Right>
      </Wrapper>
    </>
  )
}
