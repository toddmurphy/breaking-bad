import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: center;
    padding: 2% 0;
`

const LinkStyle = styled(NavLink)`
    text-decoration: none;
    color: black;
    padding:0 3%;
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <LinkStyle to={'/Home'}>Home</LinkStyle>
            <LinkStyle to={'/CharacterList'} >Characters</LinkStyle>
        </NavigationWrapper>
    )
}

export default Navigation;