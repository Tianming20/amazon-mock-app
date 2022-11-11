import styled from "styled-components";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconContainer = styled.div`
margin-top: 20px;
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 18%;
    padding: 10px;
    border: 0.5px #DCDCDC solid;
    border-radius: 12px;
`;

const Title = styled.h1`
    font-size: ${props => props.name === "signin" ? "28px" : "20px"};
    color: ${props => props.name === "signin" ? "black" : "#696969"};
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
    background-color: ${props => props.name === "signin" ? "#f4d078" : "#FFFFFF"};
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 85%;
    height: 40px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
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
const ErrMsg = styled.p`
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    display: ${props => !props.show && "hidden"}
`

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const { userInfo, setUserInfo, isAuth, setIsAuth } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            setErr("Email can't be empty!")
            return
        } else if (password.length === 0) {
            setErr("Password can't be empty!")
            return
        } else {
            userInfo.forEach(element => {
                if (element.email === email) {
                    if (element.password === password) {
                        setEmail("");
                        setPassword("");
                        setErr("");
                        setIsAuth(true);
                        navigate("/loginsuccess");
                        return
                    } else {
                        setErr("The password isn't correct!");
                        setPassword("");
                        return
                    }
                } else {
                    setErr("There is no user record corresponding to this email.");
                    setEmail("");
                    setPassword("");
                    return
                }
            });
        }

    }
    return (
        <>
            <Container>
                <IconContainer>
                    <LogoDevIcon color="secondary" fontSize="large" onClick={() => { navigate("/") }} />
                </IconContainer>
                <Wrapper>
                    <ErrMsg show={err ? "show" : "hidden"}>{err}</ErrMsg>
                    <Title name="signin">Sign In</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="email">
                            Enter your Email Address
                        </Label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Label htmlFor="password">
                            Enter your Password
                        </Label>
                        <Input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button name="signin" type="submit">Sign In</Button>
                    </Form>
                    <Agreement>
                        By continuing, you agree to Conditions of Use and Privacy Notice.
                    </Agreement>

                </Wrapper>
                <Bottom>
                    <Title name="signup">
                        -- New to Website --
                    </Title>
                    <Button name="signup" onClick={() => navigate("/register")}>Sign Up</Button>
                </Bottom>
            </Container>

        </>
    )
}

export default Login