import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    height: 80px;
`;
const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    backgroundColor: transparent;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
    h5{
        font-size: 20px;
        font-family: Sansation;
    }
`;

const NavMenu = styled.div`
backgroundColor: transparent;
display: flex;
align-items: center;
text-decoration: none;
justify-content: space-between;
width: 300px;
`;

const NavItems = styled(Link)`
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    margin: 4px 2px;
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
const ButtonWrapper = styled(Link) `
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: Black;
`

const Navigation = () => {
    return (
        <Wrapper>
            <Container>
                <LogoWrapper>
                    <img src="https://ik.imagekit.io/qpt2onjfe/Meltingpot/Logo/favicon_HYYfZhUf4g.ico" alt="Logo">
                        
                    </img>
                    <h5>MELTING POT</h5>
                </LogoWrapper>
                <NavMenu>
                    <NavItems>
                        Home
                    </NavItems>
                    <NavItems>
                        WHY US?
                    </NavItems>
                    <ButtonWrapper>
                        <Button>Innovate Now</Button>
                    </ButtonWrapper>
                </NavMenu>
                
            </Container>
        </Wrapper>
    )
}

export default  Navigation
