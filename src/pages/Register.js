import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Navbar from '../components/Navbar'
import axios from "axios";


const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    width: 18%;
    padding: 10px;
    border: 0.5px #DCDCDC solid;
    border-radius: 12px;
`;

const IconContainer = styled.div`
    margin-top: 20px;
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
`

const ErrMsg = styled.p`
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    display: ${props => !props.show && "hidden"}
`

const Title = styled.h2`
    font-size: ${props => props.name === "signup" ? "28px" : "20px"};
    color: ${props => props.name === "signup" ? "black" : "#696969"};
    font-weight: 500;
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: 400;
`

const Input = styled.input`
    padding: 10px;
    color: #D3D3D3;
    width: 80%;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin-top: 20px;
    background-color: ${props => props.name === "signup" ? "#f4d078" : "#FFFFFF"};
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 85%;
    height: 40px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
    background-color: #F5C06A;
    
  }
`;

const Bottom = styled.div`
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    // const { userInfo, setUserInfo, isAuth, setIsAuth } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            setErr("Email can't be empty!")
            return
        } else if (password.length === 0) {
            setErr("Password can't be empty!")
            return
        } else {
            // setUserInfo([...userInfo, { id: userInfo.length + 1, email, password }])
            axios.post("http://localhost:8080/users", JSON.stringify({ username: email, password: password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            ).then(res => {

                if (res.status === 200) {
                    setEmail("");
                    setPassword("");
                    navigate("/login");
                    console.log("Register successfully")
                } else {
                    console.log("Register failed!")
                }
            }
            ).catch(
                () => setErr("Register failed!")
            )
        }
    }

    return (
        <>

            <Container>
                <IconContainer>
                    <HomeIcon color="secondary" fontSize="large" onClick={() => { navigate("/") }} />
                </IconContainer>
                <Wrapper>
                    <ErrMsg show={err ? "show" : "hidden"}>{err}</ErrMsg>
                    <Title name="signup">Create account</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="email">
                            Enter your Email Address
                        </Label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Label htmlFor="password">
                            Enter your Password
                        </Label>
                        <Input type="text" id="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                        <Button name="signup" type="submit">Sign Up</Button>
                    </Form>
                    <Agreement>
                        By creating an account, you agree to Website's Conditions of Use and Privacy Notice.
                    </Agreement>
                </Wrapper>
                <Bottom>
                    <Title>
                        Already have an account?
                    </Title>
                    <Button onClick={() => navigate("/login")}>Sign In</Button>
                </Bottom>
            </Container>

        </>
    )
}

export default Register

