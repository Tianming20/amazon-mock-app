import styled from "styled-components"


const Container = styled.div`
    margin-left: 30px;
    position: relative;
    display: flex;
    align-items: center
`

const Button = styled.div`
    border: none;
    padding: 8px;
    color: white;
    cursor: pointer;
    &:hover{
   border: 1px solid #d0d0d0;
   border-radius: 3px;
}
`

export default function CategoryItem({ item, setCategory, category }) {

    const handleClick = (title) => {
        setCategory(title);
    }

    return (
        <Container>
            <Button onClick={() => handleClick(item.title)}>{item.title}</Button>
        </Container>
    )
}
