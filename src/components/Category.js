import {useContext} from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { CategoryContext } from '../context/CategoryContext'
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  display: flex;
  justify-content:space-between;
  background-color: #4169E1;
  height: 60px;
`
const Button = styled.button`
  color: white;
  background-color: #4169E1;
  border: none;
  cursor: pointer;
  font-weight: 600;
`
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`

export default function Category() {

  const {category,setCategory} = useContext(CategoryContext);


  return (
    <Container>
      <MenuIconContainer>
        <MenuIcon></MenuIcon>
      </MenuIconContainer>
      <Button onClick={()=>setCategory("All")}>All</Button>
      {categories.map(item=>
        <CategoryItem item={item} key={item.id} setCategory={setCategory} category={category}/>)}
    </Container>
  )
}
