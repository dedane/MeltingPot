import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const Container =styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 50%;
`
const LogoWrapper = styled.div`
    align-items: center;
    font-size: 20px;
    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }

`;
const ButtonWrapper = styled.div`

`;
const FormWrapper = styled.div`
    width:100%;
    display: flex;
    text-align: center;
    flex-flow: column wrap;
`;
const FormContent = styled.div`
width: 100%;
margin-top: 20px;
text-align: left;
@media all and (min-width: 768px) {
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-rows:1fr;
  grid-template-columns: 0.3fr 1fr;
  position:relative;
}
`;
const FormLabel = styled.label`
font-weight: 400;
font-size: 15px;
line-height: 19px;
margin-bottom:11px;
`
const FormInput = styled.input`
background: #fcfcfc;
border-radius: 5.66667px;
height: 51px;
border: 2.26667px solid #838386;
outline: none;
width: 80%;
text-align: justify;
text-indent: 20px;

`
const InfoWrapper = styled.div`

`;
const Button = styled(Link)`
    display:inline-block;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    margin: 4px 2px;
    border-radius: 16px;
    background: linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%);
    text-decoration: none;
`;

function Form() {
    return (
        <Container>
            <LogoWrapper>
                <img src="https://ik.imagekit.io/qpt2onjfe/Meltingpot/Logo/favicon_HYYfZhUf4g.ico" alt="Logo">       
                        </img>
                <h5>MELTING POT</h5>
            </LogoWrapper>
            <InfoWrapper>
                <h1>Book a call with our team</h1>
                <p>Please enter your name and contact info</p>
            </InfoWrapper>
            <FormWrapper>
                <form action="">
                    <FormContent>
                    <FormLabel>firstname</FormLabel>
                    <FormInput type="text"></FormInput>
                    </FormContent>
                    <FormContent>
                    <FormLabel>lastname</FormLabel>
                    <FormInput type="text"></FormInput>
                    </FormContent>
                    <FormContent>
                    <FormLabel>email</FormLabel>
                    <FormInput type="text"></FormInput>
                    </FormContent>
                    <FormContent>
                    <FormLabel>Phone</FormLabel>
                    <FormInput type="text"></FormInput>
                    </FormContent>
                    <ButtonWrapper>
                        <Button>Continue <FiArrowRight /></Button>
                    </ButtonWrapper>
                    
                </form>
            </FormWrapper>
            
        </Container>
    )
}

export default Form
