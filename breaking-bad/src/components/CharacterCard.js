import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: black;
`

const CardWrapper = styled.div`
    border: 2px solid grey;
    border-radius: 5px;
    margin: 2% 0;
`


const CharacterCard = (props) => {

    //destructure out 'props/keys' from 'character'
    const { char_id, name, nickname, occupation, portrayed, status } = props.character;
    return (
        <div>
            <LinkStyle to={'/Character/:id'} >
                <CardWrapper>
                    <p>ID: {char_id}</p>
                    <p>Name: {name}</p>
                    <p>Nickname: {nickname}</p>
                    <p>Occupation: {occupation[0]}</p>
                    <p>Portrayed by: {portrayed}</p>
                    <p>Status: {status}</p>
                </CardWrapper>
            </LinkStyle>
        </div>
    )
}

export default CharacterCard;

//response structure
// appearance: (5) [1, 2, 3, 4, 5]
// better_call_saul_appearance: []
// birthday: "09-24-1984"
// category: "Breaking Bad"
// char_id: 2
// img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg"
// name: "Jesse Pinkman"
// nickname: "Cap n' Cook"
// occupation: ["Meth Dealer"]
// portrayed: "Aaron Paul"
// status: "Alive" 