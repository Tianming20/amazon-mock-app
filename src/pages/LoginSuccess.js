import styled from "styled-components";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:50px;
`;

const IconContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 40px;
    color: "black";
    font-weight: 500;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    margin-top: 20px;
    background-color: #DAA502;
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 30%;
    height: 50px;
`;


function LoginSuccess() {

    const navigate = useNavigate(); 
    return (
        <>
            <Container>
                <IconContainer>
                    <LogoDevIcon color="secondary" fontSize="large"/>
                </IconContainer>
                <Title>You are logged in!</Title>
                <Button onClick={()=>navigate("/")}>Go to Home Page</Button>
            </Container>  
        </>
    )
}

export default LoginSuccess