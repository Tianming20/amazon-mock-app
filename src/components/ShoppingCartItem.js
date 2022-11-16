import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    &:hover {
        background-color: #F5F5F5;
    }
`

const ProductImgContainer = styled.div`
    flex: 1;
`

const ProductImg = styled.img`
    width: 100px;
    &:hover{
        transform: scale(1.5)
    }
`

const ProductDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ProductAmountConatiner = styled.div`
    flex: 1;    
    display: flex;
    gap: 12px;
`

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ButtonConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #FFA500;
    color: black;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: grey;
    }
`

export default function ShoppingCartItem({ item, cart, setCart }) {

    const removeItem = (removeItemId) => {
        const newCart = cart.filter(ele => ele.id !== removeItemId);
        setCart(newCart);
    }

    const increment = (itemId) => {
        const index = cart.findIndex(ele => ele.id === itemId);
        const num = cart[index].number;
        const newItem = { ...cart[index], number: num + 1 };
        const newCart = cart.map(ele => {
            if (ele.id === itemId) {
                return newItem;
            } else {
                return ele;
            }
        })
        setCart(newCart)
    }

    const decrement = (itemId) => {
        const index = cart.findIndex(ele => ele.id === itemId);
        const num = cart[index].number;
        if (num > 1) {
            const newItem = { ...cart[index], number: num - 1 };
            const newCart = cart.map(ele => {
                if (ele.id === itemId) {
                    return newItem;
                } else {
                    return ele;
                }
            })
            setCart(newCart)
        } else {
            removeItem(itemId)
        }
    }

    return (
        <Container>
            <ProductImgContainer>
                <ProductImg src={item.img} alt={item.name}></ProductImg>
            </ProductImgContainer>
            <ProductDetail>{item.name}</ProductDetail>
            <ProductPrice>{item.price}</ProductPrice>
            <ProductAmountConatiner>
                <IconContainer onClick={() => increment(item.id)}>
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </IconContainer>
                <ProductAmount>{item.number}</ProductAmount>
                <IconContainer onClick={() => decrement(item.id)}>
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                </IconContainer>
            </ProductAmountConatiner>
            <ButtonConatiner>
                <Button onClick={() => removeItem(item.id)}>Remove</Button>
            </ButtonConatiner>

        </Container>

    )
}
