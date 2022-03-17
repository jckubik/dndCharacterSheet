import React, { useState } from 'react';

const Dexterity = ({ computeModifier }) => {
    const [dexterity, setDexterity] = useState(10);

    return (
        <label>
            Dexterity
            <input value={dexterity} onChange={(event) => setDexterity(event.target.value)} />
            <span>{computeModifier(dexterity)}</span>
        </label>
    );
};

export default Dexterity;
