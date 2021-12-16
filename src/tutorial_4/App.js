import { useState } from 'react';
import './App.css';
import { EmptyBlock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';
import { adjectivesArr } from './components/adjectives';
import { nounsArr } from './components/nouns';


export const App = () => {

    const [phrase, setPhase] = useState([]);

    const getRandom = array => {
        return array[Math.floor(Math.random()*array.length)];
    };

    const generatePhrase = () => {
        let adjective1 = getRandom(adjectivesArr);
        let adjective2 = getRandom(adjectivesArr);
        let noun = getRandom(nounsArr);
        setPhase([...phrase, adjective1 + ' ' + adjective2 + ' ' + noun]);
    };

    const clearPhrase = () => {
        setPhase([]);
    };

    return (
        <div className="wrapper">
            {
                phrase.length > 0 ? <Phrase phrase={phrase}/> : <EmptyBlock />
            }
            <button className="btn btn_generate" onClick={generatePhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={clearPhrase}>Очистить</button>
        </div>
    )
};