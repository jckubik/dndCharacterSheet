import React, { useState } from 'react';

const CharacterName = () => {
    const [characterName, setCharacterName] = useState('second');
    console.log({ characterName, setCharacterName });

    return (
        <label>
            <input
                value={characterName}
                onChange={(event) => {
                    setCharacterName(event.target.value);
                }}
            />
            Charcter Name
        </label>
    );
};

export default CharacterName;
