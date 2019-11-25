import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = () => {
    //set character state for initial state using 'useState'
    const [characters, setCharacters] = useState([])
    //set 'query' for search/filter using 'useState'


    //use 'useEffect' to get data using axios from breaking bad api --> 
    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('No character data returned', error)
            })
    })

    //create 'onInputChange' handler to watch for query input change each time

    return (
        // build search form inputs here -> need 'onChange' and 'value'

        <div>
            <h1>Search form component below</h1>
            {/*map and export props to CharacterCard */}
        </div>
    )
}

export default SearchForm;