import React, { useState } from 'react';

const Background = () => {
    const [background, setBackground] = useState('Background');

    return (
        <label>
            <input value={background} onChange={(event) => setBackground(event.target.value)} />
            Background
        </label>
    );
};

export default Background;
