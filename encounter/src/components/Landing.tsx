import React, { useEffect, useState } from 'react';
import { PoetryBox, StanzaSpacing } from 'components/Boxes';
import { BlueButton } from 'components/Buttons';
import { HomeTheme } from 'components/Themes';
import { youlie } from 'poems';

type stanzaProps = {
    start: number;
    end: number;
};

const Landing = () => {
    const [displayLine, setLine] = useState('');
    const [stanzaStart, setStanzaStart] = useState(0);
    const [stanzaEnd, setStanzaEnd] = useState(0);
    const [display, setDisplay] = useState('');

    var poems = [
        {
            title: 'you lie in the great listening',
            author: 'Paul Celan',
            translator: 'Pierre Jorris',
            stanzas: [
                { start: 0, end: 1 },
                { start: 3, end: 6 },
                { start: 8, end: 9 },
                { start: 11, end: 13 },
                { start: 15, end: 17 },
            ],
            poem: youlie,
        },
    ];

    // function choosePoem() {

    // }
    function choose(num: number) {
        var index = Math.floor(Math.random() * num);
        return index;
    }
    function setSnL(stanzas: stanzaProps[]) {
        var stanza = choose(stanzas.length);
        var start = stanzas[stanza].start;
        var end = stanzas[stanza].end;
        var line = start + choose(end - start);
        setStanzaStart(start);
        setStanzaEnd(end);
        setLine(youlie[line]);
    }

    const renderStanza = (start: number, end: number) => {
        var lines = [];
        for (let i = start; i <= end; i++) {
            lines.push(<p>{youlie[i]}</p>);
        }
        return lines;
    };

    const renderPoem = () => {
        var lines = [];
        for (let i = 0; i <= youlie.length - 1; i++) {
            if (youlie[i] === '') {
                lines.push(<StanzaSpacing></StanzaSpacing>);
            }
            lines.push(<p>{youlie[i]}</p>);
        }
        return lines;
    };
    useEffect(() => {
        setSnL(poems[0].stanzas);
    }, []);

    function chooseRender(displayState: string) {
        if (displayState === '') {
            return <p>{displayLine}</p>;
        } else if (displayState === 'stanza') {
            return <p>{renderStanza(stanzaStart, stanzaEnd)}</p>;
        } else {
            return <p>{renderPoem()}</p>;
        }
    }

    function setthestate() {
        if (display === '') {
            setDisplay('stanza');
        } else setDisplay('poem');
    }
    return (
        <HomeTheme>
            <div>
                <h1>Poetry as Encounter</h1>
                {display === 'poem' ? <h2>{poems[0].title}</h2> : null}
                {display === 'poem' ? <h3>{poems[0].author}</h3> : null}
            </div>
            <PoetryBox>{chooseRender(display)}</PoetryBox>
            <BlueButton
                onClick={() => {
                    setthestate();
                }}
            >
                Proceed on your encounter
            </BlueButton>
        </HomeTheme>
    );
};

export default Landing;
