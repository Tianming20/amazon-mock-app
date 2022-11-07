import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
`

const Wrapper = styled.div`
    width: 30%;
    height: 30%;
    padding: 20px;
    border: 0.5px black dotted;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: #F0F8FF;
`

const Input = styled.input`
    background-color: #DEB887;
    z-index: 2;
    cursor: pointer;
    width: 50%;
    height: 30%;
`

const Desc = styled.span`
    font-size: 30px;
    font-weight: 200;`


export default function ImageUploader() {
  return (
    <>
        <Container>
            <Title>Upload file</Title>
            <Wrapper>
                <Input type="file"></Input>
                <Desc>Supported files</Desc>
                <Desc>PDF JPG PNG</Desc>
            </Wrapper>
        </Container>
    </>
  )
}
