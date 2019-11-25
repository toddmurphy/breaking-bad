import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/CharacterList'} >Characters</Link>
        </div>
    )
}

export default Navigation;