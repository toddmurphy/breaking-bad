import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const SearchForm = () => {
    //set character state for initial state using 'useState'
    const [characters, setCharacters] = useState([])
    //set 'query' for search/filter using 'useState'


    //use 'useEffect' to get data using axios from breaking bad api --> 
    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters/')
            .then(response => {
                console.log(response.data)
                const characterData = response.data;
                setCharacters(characterData);
            })
            .catch(error => {
                console.log('No character data returned', error)
            })
    }, [])

    //create 'onInputChange' handler to watch for query input change each time

    return (
        // build search form inputs here -> need 'onChange' and 'value'
        <div>
            <form>
                <input
                    type='text'
                    name='search'
                    placeholder='Search by name, nickname, and occupation'
                />
            </form>
            {/*map and export props to CharacterCard */}
            {characters.map(character => (
                <CharacterCard key={character.char_id} character={character} />
            ))}
        </div>
    )
}

export default SearchForm;