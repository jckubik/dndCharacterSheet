import React, { useState } from 'react';

const Wisdom = ({ computeModifier }) => {
    const [wisdom, setWisdom] = useState(10);

    return (
        <label>
            Wisdom
            <input value={wisdom} onChange={(event) => setWisdom(event.target.value)} />
            <span>{computeModifier(wisdom)}</span>
        </label>
    );
};

export default Wisdom;
