import React from 'react'
import styled from 'styled-components';

const Column = styled.div`
display: flex;


`

const ImgWrapper = styled.div`
img {
    width: 100%;
    height: auto;
    object-fit: contain;

}
`;

function Money() {
    return (
        <Column>
            <ImgWrapper>
            <img src="https://ik.imagekit.io/ugyodiq15/sprout-money_QekEH9aeM.png" alt="sprout-money"></img>
            </ImgWrapper>
        </Column>
            
            
       
    )
}

export default Money
