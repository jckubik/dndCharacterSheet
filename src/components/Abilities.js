import React from 'react';
import Charisma from './Abilities/Charisma';
import Constitution from './Abilities/Constitution';
import Dexterity from './Abilities/Dexterity';
import Intelligence from './Abilities/Intelligence';
import Strength from './Abilities/Strength';
import Wisdom from './Abilities/Wisdom';

const Abilities = () => {
    const computeModifier = (ability) => Math.floor((ability - 10) / 2);

    return (
        <>
            <Strength computeModifier={computeModifier} />
            <Dexterity computeModifier={computeModifier} />
            <Constitution computeModifier={computeModifier} />
            <Intelligence computeModifier={computeModifier} />
            <Wisdom computeModifier={computeModifier} />
            <Charisma computeModifier={computeModifier} />
        </>
    );
};

export default Abilities;
