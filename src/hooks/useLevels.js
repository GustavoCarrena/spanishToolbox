import React, { useState } from 'react';


export const useLevels = (text) => {

    const [level, setLevel] = useState('A1');

    const content = (serachedLevel) => {
        for (const value in text) {
            if (text[value]['level'] === serachedLevel) {
                return text[value]
            }
        }
    };

    const levels = content(level).level;
    const titles = content(level).title;
    const text1 = content(level).text1;
    const text2 = content(level).text2;
    const text3 = content(level).text3;
    const text4 = content(level).text4;


    const handle = {
        A1: () => setLevel('A1'),
        A2: () => setLevel('A2'),
        B1: () => setLevel('B1'),
        B2: () => setLevel('B2'),
        C1: () => setLevel('C1'),
        C2: () => setLevel('C2'),
    };


    return {
        levels,
        titles,
        text1,
        text2,
        text3,
        text4,
        handle,
        level
    }


}
