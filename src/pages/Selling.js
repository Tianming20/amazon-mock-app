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
import { useDispatch, useSelector } from "react-redux";
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
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 1em;
`

const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 12rem;
`

const Button = styled.button`
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    margin-bottom: 3em;
    color: black;
    cursor: pointer;
    width: 8%;
    height: 40px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
        background-color: #F5C06A;   
  }
`;

const Img = styled.img`
  width: 90px;
  height: 80px;
  
`

const DeleteButton = styled.button`
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 80px;
    height: 28px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
        background-color: #F5C06A;   
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    margin-bottom: 1em;
`

export default function Selling() {

    const navigate = useNavigate();
    const { sellingProducts } = useSelector(state => state.SellingProducts)
    const dispatch = useDispatch();

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <TitleContainer>
                    <Title>Current Listing</Title>

                </TitleContainer>
                <TableContainer sx={{ border: 1, borderColor: 'primary.main', mb: 4, ml: 4, mr: 4, width: 'auto' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Product</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sellingProducts.map((row) => (
                                <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#F5F5F5' } }} >
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center"><Img src={row.img} alt={row.name} /></TableCell>
                                    <TableCell align="center">{row.category}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center">
                                        <DeleteButton
                                            onClick={() => dispatch(removeProducts({ id: row.id }))}>
                                            delete
                                        </DeleteButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ButtonContainer><Button onClick={() => navigate("/addproduct")}>Create Listing</Button></ButtonContainer>


            </Wrapper>
            <Footer />
        </Container>
    )
}
