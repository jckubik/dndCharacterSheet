import React, { useState } from 'react';

const Alignment = () => {
    const [alignment, setAlignment] = useState('Chaotic');

    return (
        <label>
            Alignment
            <input value={alignment} onChange={(event) => setAlignment(event.target.value)} />
        </label>
    );
};

export default Alignment;
