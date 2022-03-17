import React, { useState } from 'react';

const ExperiencePoints = () => {
    const [experiencePoints, setExperiencePoints] = useState('Chaotic');

    return (
        <label>
            <input value={experiencePoints} onChange={(event) => setExperiencePoints(event.target.value)} />
            Experience Points
        </label>
    );
};

export default ExperiencePoints;
