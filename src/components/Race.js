import React, { useState } from 'react';

const Race = () => {
    const [race, setRace] = useState('Eldarin');

    return (
        <label>
            <input value={race} onChange={(event) => setRace(event.target.value)} />
            Race
        </label>
    );
};

export default Race;
