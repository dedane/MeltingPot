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
    color: black;
    align-items: center;
    text-decoration: none;
    
    
`
const HexImg1 = styled.div`
 position: absolute;
margin-bottom: 600px;
z-index: auto;
align: start;
justify-content: center;
top: 500px;
right: 10px;
img{
    opacity: 90%;
    width: 280px;
    height: auto;
    object-fit: contain;
} 
`
const HexImg2 = styled.div`
position: relative;
margin-bottom: 600px;
z-index: auto;
align: center;
justify-content: center;
left: 250px;
img{
    opacity: 60%;
    width: 200px;
    height: auto;
    object-fit: contain;
}
`
const HexImg3 = styled.div`
position: relative;
z-index: auto;
align: center;
justify-content: center;
left:700px;
img{
    opacity: 60%;
    width: 100px;
    height: auto;
    object-fit: contain;
}
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
    Link{
        text-decoration: none;
    }
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
                        <Button> <Link to="SignUp"  style={{ textDecoration: 'none' }}>WORK WITH US</Link></Button>
                    </ButtonWrapper>
                    <HexImg3>
                        <img src="https://ik.imagekit.io/ugyodiq15/hex2__9oQnuLNr.svg" alt=""></img>
                    </HexImg3>
                </Reimagining>
                <HexImg2>
                    
                    <img src="https://ik.imagekit.io/ugyodiq15/hex3_7NB1sdhR-.svg" alt=""></img>
                </HexImg2>
                <HeroImage>
                <img src="https://res.cloudinary.com/dkq3tnpwu/image/upload/v1619638214/seedling-stock_aovit4.png" alt="Logo">
                        
                        </img>
                        <HexImg1>
                    <img src="https://ik.imagekit.io/ugyodiq15/hex1_tnmztGr_0i.svg" alt=""></img>
                </HexImg1>
                </HeroImage>
                

            </Container>
        </Wrapper>
    )
}

export default Innovation;
