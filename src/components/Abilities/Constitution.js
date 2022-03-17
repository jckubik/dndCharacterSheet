import React, { useState } from 'react';

const Constitution = ({ computeModifier }) => {
    const [constitution, setConstitution] = useState(10);

    return (
        <label>
            Constitution
            <input value={constitution} onChange={(event) => setConstitution(event.target.value)} />
            <span>{computeModifier(constitution)}</span>
        </label>
    );
};

export default Constitution;
