import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const TextInput = styled.input`
    width: 35%;
    height: 45px;
    border-radius: 5px;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    padding: 0 2%;
    margin: 0 3%;
    margin-top: 3%;
`
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

const SearchForm = () => {
    //set character state for initial state using 'useState'
    const [characters, setCharacters] = useState([])
    //set 'query' for search/filter using 'useState'
    const [query, setQuery] = useState('');

    //use 'useEffect' to get data using axios from breaking bad api --> 
    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters/')
            .then(response => {
                console.log(response.data)
                const characterData = response.data;

                const result = characterData.filter(character => {
                    return (
                        character.name.toLowerCase().includes(query.toLowerCase()) ||
                        character.nickname.toLowerCase().includes(query.toLowerCase()) ||
                        character.status.toLowerCase().includes(query.toLowerCase())
                    )
                })
                console.log(result)

                setCharacters(result);
            })
            .catch(error => {
                console.log('No character data returned', error)
            })
    }, [query])

    //create 'onInputChange' handler to watch for query input change each time
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        // build search form inputs here -> need 'onChange' and 'value'
        <div>
            <form>
                <TextInput
                    type='text'
                    name='search'
                    placeholder='Search by name, nickname, and occupation'
                    onChange={handleInputChange}
                    value={query}
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