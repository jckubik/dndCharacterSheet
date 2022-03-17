import React, { useState } from 'react';

const Charisma = ({ computeModifier }) => {
    const [charisma, setCharisma] = useState(10);

    return (
        <label>
            Charisma
            <input value={charisma} onChange={(event) => setCharisma(event.target.value)} />
            <span>{computeModifier(charisma)}</span>
        </label>
    );
};

export default Charisma;
