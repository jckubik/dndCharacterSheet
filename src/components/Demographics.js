import React from 'react';
import ClassAndLevel from './ClassAndLevel';
import Background from './Background';
import PlayerName from './PlayerName';
import Race from './Race';
import Alignment from './Alignment';
import ExperiencePoints from './ExperiencePoints';

const Demographics = ({ level, setLevel }) => (
    <>
        <ClassAndLevel level={level} setLevel={setLevel} />
        <Background />
        <PlayerName />
        <Race />
        <Alignment />
        <ExperiencePoints />
    </>
);

export default Demographics;
