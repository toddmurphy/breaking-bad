import React from 'react';
import SearchForm from './SearchForm';



const CharacterList = () => {
    return (
        <div>
            <h1>CharacterList holds all character information</h1>
            <h3>Breaking bad characters listed here with search box/filter</h3>
            {/* import SearchForm.js here --> holds search/filter and exports props to CharacterCard */}
            <SearchForm />
        </div>
    )
}

export default CharacterList;