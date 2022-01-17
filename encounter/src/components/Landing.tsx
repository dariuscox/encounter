import React from 'react';
import { PoetryBox } from 'components/Boxes';
import { BlueButton } from 'components/Buttons';
import { HomeTheme } from 'components/Themes';

const Landing = () => {
    return (
        <HomeTheme>
            <div>
                <h1>Poetry as Encounter</h1>
            </div>
            <PoetryBox>
                <p>YOU LIE in the great listening,</p>
            </PoetryBox>
            <BlueButton>Proceed on your journey</BlueButton>
        </HomeTheme>
    );
};

export default Landing;
