import React, { useState } from 'react';

const Inspiration = () => {
    const [inspiration, setInspiration] = useState('');

    return (
        <label>
            <input value={inspiration} onChange={(event) => setInspiration(event.target.value)} />
            Inspiration
        </label>
    );
};

export default Inspiration;
