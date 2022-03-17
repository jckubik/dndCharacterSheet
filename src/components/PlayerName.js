import React, { useState } from 'react';

const PlayerName = () => {
    const [playerName, setPlayerName] = useState('Jacob');

    return (
        <label>
            <input value={playerName} onChange={(event) => setPlayerName(event.target.value)} />
            Player Name
        </label>
    );
};

export default PlayerName;
