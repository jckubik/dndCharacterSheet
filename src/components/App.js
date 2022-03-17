import React, { useState } from 'react';
import CharacterName from './CharacterName';
import Demographics from './Demographics';
import Abilities from './Abilities';
import Inspiration from './Inspiration';
import ProficiencyBonus from './ProficiencyBonus';

const App = () => {
    const [level, setLevel] = useState(20);

    return (
        <>
            <CharacterName />
            <Demographics level={level} setLevel={setLevel} />
            <Abilities />
            <Inspiration />
            <ProficiencyBonus level={level} />
        </>
    );
};

export default App;
