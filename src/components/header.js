import React from 'react'
import styled from 'styled-components'

export const Headercomp = styled.div`
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
        h3{
            margin: 0;
        }
`;

const Header = () =>(
    <Headercomp>
        <h3>Converta Sua Moeda</h3>
    </Headercomp>
    );
    
    export default Header;