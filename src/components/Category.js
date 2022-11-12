import { useContext } from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { CategoryContext } from '../context/CategoryContext'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './Sidebar';


const Container = styled.div`
  display: flex;
  background-color: #143D9C;
  height: 45px;
`
const Button = styled.button`
  color: white;
  background-color: #143D9C;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  margin-left: 50px;
  padding: 0 20px;
  &:hover{
   border: 1px solid #d0d0d0;
   border-radius: 3px;
}
`
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 10px;
`



export default function Category() {

  const { category, setCategory } = useContext(CategoryContext);


  return (
    <Container>
      {/* <MenuIconContainer>
        <MenuIcon style={{ color: "white" }}></MenuIcon>
      </MenuIconContainer> */}
      <SideBar />
      <Button onClick={() => setCategory("All")}>All</Button>
      {categories.map(item =>
        <CategoryItem item={item} key={item.id} setCategory={setCategory} category={category} />)}
    </Container>
  )
}
