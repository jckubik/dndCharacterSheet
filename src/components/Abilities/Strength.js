import React, { useState } from 'react';

const Strength = ({ computeModifier }) => {
    const [strength, setStrength] = useState(10);

    return (
        <label>
            Strength
            <input value={strength} onChange={(event) => setStrength(event.target.value)} />
            <span>{computeModifier(strength)}</span>
        </label>
    );
};

export default Strength;
