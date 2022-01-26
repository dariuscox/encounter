import React, { useEffect, useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { PoetryBox, StanzaSpacing } from './components/Boxes';
import { BlueButton } from './components/Buttons';
import { HomeTheme } from './components/Themes';
import { youlie, twilight, inone, horseshoe } from './poems';
import './App.css';

type stanzaProps = {
    start: number;
    end: number;
};

const App = () => {
    const [poemNumber, setPoemNumber] = useState(0);
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
        {
            title: 'The Twilight of Freedom',
            author: 'Osip Mandel’shtam',
            translator: 'Clarence Brown & W.C. Merwin',
            stanzas: [
                { start: 0, end: 5 },
                { start: 7, end: 12 },
                { start: 14, end: 19 },
                { start: 21, end: 26 },
            ],
            poem: twilight,
        },
        {
            title: 'In One',
            author: 'Paul Celan',
            translator: 'Pierre Jorris',
            stanzas: [
                { start: 0, end: 3 },
                { start: 5, end: 11 },
                { start: 13, end: 17 },
                { start: 19, end: 19 },
            ],
            poem: inone,
        },
        {
            title: 'Whoever Finds a Horseshoe (A Pindaric fragment)',
            author: 'Osip Mandel’shtam',
            translator: 'James Greene',
            stanzas: [
                { start: 0, end: 12 },
                { start: 14, end: 26 },
                { start: 28, end: 36 },
                { start: 38, end: 42 },
                { start: 44, end: 45 },
                { start: 47, end: 54 },
                { start: 56, end: 66 },
                { start: 68, end: 75 },
                { start: 77, end: 84 },
                { start: 86, end: 92 },
                { start: 94, end: 104 },
            ],
            poem: horseshoe,
        },
    ];

    function choose(num: number) {
        var index = Math.floor(Math.random() * num);
        return index;
    }
    function setSnL(stanzas: stanzaProps[], poemnum: number) {
        var stanza = choose(stanzas.length);
        var start = stanzas[stanza].start;
        var end = stanzas[stanza].end;
        var line = start + choose(end - start);
        setStanzaStart(start);
        setStanzaEnd(end);
        setLine(poems[poemnum].poem[line]);
    }

    const renderStanza = (start: number, end: number) => {
        var lines = [];
        for (let i = start; i <= end; i++) {
            lines.push(<p>{poems[poemNumber].poem[i]}</p>);
        }
        return lines;
    };

    const renderPoem = () => {
        var lines = [];
        for (let i = 0; i <= poems[poemNumber].poem.length - 1; i++) {
            if (poems[poemNumber].poem[i] === '') {
                lines.push(<StanzaSpacing></StanzaSpacing>);
            }
            lines.push(<p>{poems[poemNumber].poem[i]}</p>);
        }
        return lines;
    };
    useEffect(() => {
        let poemnum = choose(poems.length);
        setPoemNumber(poemnum);
        setSnL(poems[poemnum].stanzas, poemnum);
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
        <StylesProvider injectFirst>
            <HomeTheme>
                <div>
                    <h1>Poetry as Encounter</h1>
                    {display === 'poem' ? (
                        <h2>{poems[poemNumber].title}</h2>
                    ) : null}
                    {display === 'poem' ? (
                        <h3>{poems[poemNumber].author}</h3>
                    ) : null}
                    {display === 'poem' ? (
                        <h3>Translated By: {poems[poemNumber].translator}</h3>
                    ) : null}
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
        </StylesProvider>
    );
};

export default App;
