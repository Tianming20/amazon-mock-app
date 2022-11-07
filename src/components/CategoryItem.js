import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
`

const Button = styled.div`
    border: none;
    padding: 10px;
    color: white;
    cursor: pointer;
    font-weight: 600;
`

export default function CategoryItem({item,setCategory,category}) {
    
    const handleClick = (title) => {
        setCategory(title);
    }

    return (
    <Container>
        <Button onClick={()=>handleClick(item.title)}>{item.title}</Button>
    </Container>
  )
}
