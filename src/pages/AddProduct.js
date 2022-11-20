import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addProducts} from '../store/modules/SellingProducts'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 10px;
    margin-left: 35%;
    margin-top: 50px;
    margin-bottom: 10px;
    border: 0.5px #DCDCDC solid;
    border-radius: 12px;
`;


const Title = styled.h2`
    color: #696969;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Label = styled.label`
    font-size: 26px;
    font-weight: 400;
`

const Input = styled.input`
    padding: 10px;
    color: black;
    width: 80%;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    margin-top: 20px;
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 85%;
    height: 40px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
    background-color: #F5C06A;
  }
`;

const Bottom = styled.div`
    width: 25%;
    margin-left: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`
const Subtitle = styled.h2`
    color: #696969;
    font-weight: 300;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

const Bottombutton = styled.button`
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 90%;
    height: 40px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover {
    background-color: #F5C06A;
  }
`;

const P = styled.p`
  color: red;
`

const PreviewImg = styled.img`
  width: 200px;
  height: 200px;
`

export default function AddProduct() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            category: "",
            img: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            price: Yup.string().max(15, "Must be 6 characters or less").required("Required"),
            category: Yup.string().max(15, "Must be 10 characters or less").required("Required"),
            img: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            dispatch(addProducts({newProduct:values}));
            console.log(values.img);
            navigate("/sell");  
        }
    })

  return (
    <Container>
        <Navbar />
            <Wrapper>
                    <Title>Add your Product</Title>
                    <Form onSubmit={formik.handleSubmit}>
                        <Label htmlFor="name">
                            Enter the name of your product
                        </Label>
                        <Input type="text" id="name" name="name"
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name? <P>{formik.errors.name}</P>: null}
                        <Label htmlFor="price">
                            Enter the price of your product
                        </Label>
                        <Input type="text" id="price" name="price"
                            value={formik.values.price} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.price && formik.errors.price? <P>{formik.errors.price}</P>: null}
                        <Label htmlFor="category">
                            Enter the category of your product
                        </Label>
                        <Input type="text" id="category" name="category"
                            value={formik.values.category} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.category && formik.errors.category? <P>{formik.errors.category}</P>: null}
                        <Label htmlFor="image">
                            Upload your image
                        </Label>
                        <Input type="file" id="image" name="img" accept="image/*"
                            onChange={e=>formik.setFieldValue("img", URL.createObjectURL(e.currentTarget.files[0]))}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.img && formik.errors.img? <P>{formik.errors.img}</P> : null}
                        {formik.values.img ? <PreviewImg src={formik.values.img} alt={formik.values.name}></PreviewImg> : null}
                        <Button type="submit">Add Product</Button>
                    </Form>
                    <Agreement>
                        By Adding a product, you agree to Website's Conditions of Use and Privacy Notice.
                    </Agreement>
                </Wrapper>
                <Bottom>
                    <Subtitle>
                        -- Back to Selling Page --
                    </Subtitle>
                    <Bottombutton onClick={() => navigate("/sell")}>Selling Page</Bottombutton>
                </Bottom>
                
        <Footer />
    </Container>
  )
}
