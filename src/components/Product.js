
import styled from 'styled-components'
import { popularProducts } from '../data'

const Container = styled.div`
    margin: 5px;
    height: 450px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap: 10px;
    
`

const Image = styled.img`
    height: 75%;  
    width: 330px; 
`

const Title = styled.div`
    display: flex;
    justify-content: center;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  border-radius: 20px;
  background-color: #FFA500;
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`
export default function Product({item, cart, setCart}) {
  const handleClick = (addItemId) => {
    if(cart.findIndex(ele=>ele.id===addItemId) !== -1){
      const index = cart.findIndex(ele=>ele.id===addItemId);
      const num = cart[index].number;
      const newItem = {...cart[index],number:num+1};
      const newCart = cart.map(ele=>{
        if(ele.id===addItemId){
          return newItem;
        } else {
          return ele;
        }
      })
      setCart(newCart)
    } else {
      const [newAddItem] = popularProducts.filter(ele=>ele.id === addItemId);
      setCart([...cart,{...newAddItem, number: 1}]);
    }
  }

  return (
    <Container>
        <Image src={item.img} />
        <Title>{item.name}</Title>
        <Price>{item.price}</Price>
        <Button onClick={()=>handleClick(item.id)}>Add to Cart</Button>
    </Container>
  )
}
