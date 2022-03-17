import React, { useState } from 'react';

const ProficiencyBonus = ({ level }) => {
    function calculateBonus() {
        let bonusSetting = '+2';

        if (level > 4 && level <= 8) {
            bonusSetting = '+3';
        } else if (level > 8 && level <= 12) {
            bonusSetting = '+4';
        } else if (level > 12 && level <= 16) {
            bonusSetting = '+5';
        } else if (level > 16 && level <= 20) {
            bonusSetting = '+6';
        }

        return bonusSetting;
    }

    return (
        <label>
            <input value={calculateBonus()} />
            Proficiency Bonus
        </label>
    );
};

export default ProficiencyBonus;
