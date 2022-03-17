import React, { useState } from 'react';

const Intelligence = ({ computeModifier }) => {
    const [intelligence, setIntelligence] = useState(10);

    return (
        <label>
            Intelligence
            <input value={intelligence} onChange={(event) => setIntelligence(event.target.value)} />
            <span>{computeModifier(intelligence)}</span>
        </label>
    );
};

export default Intelligence;
