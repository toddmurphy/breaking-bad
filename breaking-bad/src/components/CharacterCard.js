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
    width: 70%;
    margin: auto;
    /* margin: 2% 0; */
    margin-top: 5%;
    box-shadow: 0px 25px 32px -25px rgba(151,163,184,.5);
    
    &:hover {
        background: salmon;
        color: white;
        border: 2px solid salmon;

    }
`

const CardContainer = styled.div`
    /* border: 2px solid red; */
    width: 100%;
    margin: 3% 0;
`

const ImageWrapper = styled.img`
    width: 30%;
`
const FlexWrapper = styled.div`
    margin: auto;

`

const CharacterCard = (props) => {

    //destructure out 'props/keys' from 'character'
    const { char_id, img, name, birthday, nickname, occupation, portrayed, status } = props.character;
    return (
        <FlexWrapper>
            <LinkStyle to={`/Character/${props.character.char_id}`} >
                <CardWrapper>
                    <CardContainer>
                        <p>ID: {char_id}</p>
                        <ImageWrapper src={img} alt='breaking bad characters' />
                        <p>Name: {name}</p>
                        <p>Nickname: {nickname}</p>
                        <p>Birthday: {birthday}</p>
                        <p>Occupation: {occupation}</p>
                        <p>Portrayed by: {portrayed}</p>
                        <p>Status: {status}</p>
                    </CardContainer>
                </CardWrapper>
            </LinkStyle>
        </FlexWrapper>
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
