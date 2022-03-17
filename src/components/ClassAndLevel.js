import React, { useState } from 'react';

const ClassAndLevel = ({ level, setLevel }) => {
    const [className, setClassName] = useState('Wizard');

    return (
        <>
            <label>
                <input
                    value={className}
                    onChange={(event) => {
                        setClassName(event.target.value);
                    }}
                />
                Class
            </label>

            <label>
                <input
                    value={level}
                    onChange={(event) => {
                        setLevel(event.target.value);
                    }}
                />
                Level
            </label>
        </>
    );
};

export default ClassAndLevel;
