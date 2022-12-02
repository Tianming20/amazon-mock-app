import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addProducts } from '../store/modules/SellingProducts'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const Wrapper = styled.div`
    width: 30%;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 0.5px #DCDCDC solid;
    border-radius: 12px;
`;

const IconContainer = styled.div`
    margin-top: 20px;
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
`

const Title = styled.h2`
    color: #696969;
    font-weight: 500;
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Label = styled.label`
margin-top: 2rem;
margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 400;
`

const Input = styled.input`
    padding: 7px;
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
    margin-top: 40px;
    background-color: "#FFFFFF";
    border: 1px black solid;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    width: 76%;
    height: 40px;
    border-radius: 4px;
    border-color: #a88734 #9c7e31 #846a29;
    &:hover {
    background-color: #F5C06A;
  }
`;

const Bottom = styled.div`
    margin-top: 3rem;
    width: 17%;
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
            dispatch(addProducts({ newProduct: values }));
            console.log(values.img);
            navigate("/sell");
        }
    })

    return (
        <>

            <Container>
                <IconContainer>
                    <HomeIcon color="secondary" fontSize="large" onClick={() => { navigate("/") }} />
                </IconContainer>
                <Wrapper>
                    <Title>List Product</Title>
                    <Form onSubmit={formik.handleSubmit}>
                        <Label htmlFor="name">
                            Product Name
                        </Label>
                        <Input type="text" id="name" name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <P>{formik.errors.name}</P> : null}
                        <Label htmlFor="price">
                            Product Price
                        </Label>
                        <Input type="text" id="price" name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.price && formik.errors.price ? <P>{formik.errors.price}</P> : null}
                        <Label htmlFor="category">
                            Product Category
                        </Label>
                        <Input type="text" id="category" name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.category && formik.errors.category ? <P>{formik.errors.category}</P> : null}
                        <Label htmlFor="image">
                            Upload Product Image
                        </Label>
                        <Input type="file" id="image" name="img" accept="image/*"
                            onChange={e => formik.setFieldValue("img", URL.createObjectURL(e.currentTarget.files[0]))}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.img && formik.errors.img ? <P>{formik.errors.img}</P> : null}
                        {formik.values.img ? <PreviewImg src={formik.values.img} alt={formik.values.name}></PreviewImg> : null}
                        <Button type="submit">Create Listing</Button>
                    </Form>
                    <Agreement>
                        By Adding a product, you agree to Website's Conditions of Use and Privacy Notice.
                    </Agreement>
                </Wrapper>
                <Bottom>
                    <Bottombutton onClick={() => navigate("/sell")}>View Current Listing</Bottombutton>
                </Bottom>


            </Container>
            <Footer />
        </>
    )
}
