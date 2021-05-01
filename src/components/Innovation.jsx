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
    text-align: left;
    justify-content: center;
    margin-top: 100px;
    margin-right: 50px;
    padding: 50px; 
    h1{
        font-size: 50px;
        font-family: Sansation;
    }
    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    

`;
const HeroImage = styled.div`
z-index: -1;
margin-right: 200px
left: 50px;
align: center;
justify-content: center;
img{
    width: 700px;
    height: auto;
    object-fit: contain;
    
}

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
    padding: 10px 10px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    margin: 20px 10PX;
    border-radius: 16px;
    background: linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%); 
`;

function Innovation() {
    return (
        <Wrapper>
            <Container>
                <Reimagining>
                    <h1>Reimagining Innovation</h1>
                    <p>Create your future through digital transformation & <br></br>
                        enterprenureship
                    </p>
                        <ButtonWrapper>
                        <Button>WORK WITH US</Button>
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
