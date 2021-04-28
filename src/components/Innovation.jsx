import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: 80px;
`;
const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: none;
`;
const Reimagining = styled.div`

    width: 500px;
    
    height: 100px;
    bacground-color: green;
    align: center;
    justify-content: center;
    margin-top: 200px;
    h1{
        font-size: 50px;
    }
    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    

`;
const HeroImage = styled.div`
width: 500px;
height: 50%;
margin-right: 200px
left: 50px;
align: center;
justify-content: center;

`;
const ButtonWrapper = styled(Link) `
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    align-items: center;
`

const Button = styled(Link)`
    display:inline-block;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    margin: 4px 2px;
    border-radius: 16px;
    background: linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%); 
`;

function Innovation() {
    return (
        <Wrapper>
            <Container>
                <Reimagining>
                    <h1>Reimagining Innovation</h1>
                    <p>CREATE YOUR FUTURE THROUGH DIGITAL 
                        TRANSFORMATION & ENTERPRENURESHIP Copy</p>
                        <ButtonWrapper>
                        <Button>Innovate Now</Button>
                    </ButtonWrapper>
                </Reimagining>
                <HeroImage>
                <img src="https://res.cloudinary.com/dkq3tnpwu/image/upload/v1619638214/seedling-stock_aovit4.png" alt="Logo">
                        
                        </img>
                </HeroImage>

            </Container>
        </Wrapper>
    )
}

export default Innovation;
