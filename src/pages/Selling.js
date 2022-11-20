import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { removeProducts } from "../store/modules/SellingProducts";

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    align-items: center;
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: auto;
    height: 80%;
`

const Button = styled.button`
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 15%;
    height: 40px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
        background-color: #F5C06A;   
  }
`;

const Img = styled.img`
  width: 90px;
  height: 80px;
  &:hover {
    transform: scale(1.4);
  }
`

const DeleteButton = styled.button`
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 100px;
    height: 40px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
        background-color: #F5C06A;   
    }
`

export default function Selling() {

    const navigate = useNavigate();
    const {sellingProducts} = useSelector(state => state.SellingProducts)
    const dispatch = useDispatch();

    return (   
    <Container>
        <Navbar />
        <Wrapper>
            <TitleContainer>
                <Title>All Selling Products</Title>
                <Button onClick={()=>navigate("/addproduct")}>Add Product</Button>
            </TitleContainer>
            <TableContainer sx={{ border: 1, borderColor: 'primary.main', mb: 4, ml: 4, mr: 4, width: 'auto'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {sellingProducts.map((row) => (
                        <TableRow key={row.id} sx={{'&:hover':{backgroundColor:'#F5F5F5'}}} >
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center"><Img src={row.img} alt={row.name}/></TableCell>
                            <TableCell align="center">
                                <DeleteButton 
                                onClick={()=>dispatch(removeProducts({id:row.id}))}>
                                    delete
                                </DeleteButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
            
            
        </Wrapper>
        <Footer />
    </Container>    
  )
}
