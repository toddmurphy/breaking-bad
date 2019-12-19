import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
    console.log(props)
    //set up initial state using useState
    const [character, setCharacter] = useState([]);
    console.log(character)
    //setup id --> dynamic ID;
    const id = props.match.params.id;

    //set up axios call to breaking bad api using useEffect to get dynamic ID
    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            .then(response => {
                console.log(response.data[0])
                setCharacter(response.data[0])
            })
            .catch(error => {
                console.log('No character data returned', error)
            })
    }, [id])


    const { char_id, img, name, birthday, nickname, occupation, portrayed, status } = character;
    return (
        <div>
            <h1>Character --> use dynamic id to show just one character</h1>
            <p>ID: {char_id}</p>
            <img src={img} alt='breaking bad characters' />
            <p>Name: {name}</p>
            <p>Birthday: {birthday}</p>
            <p>Nickname: {nickname}</p>
            <p>Occupation: {occupation}</p>
            <p>Portrayed by: {portrayed}</p>
            <p>Status: {status}</p>
        </div>
    )
}

export default Character;