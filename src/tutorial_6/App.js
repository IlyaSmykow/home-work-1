import './style.css';
import { tabs } from './tabs';
import { useState } from 'react';

export const App = () => {

    const [activeId, setActiveId] = useState();

    const toggleId = id => {
        setActiveId(id);
    };

    return (
        <div id="app">
            <div className="app-container">
            <h1 className="app-title">FAQ</h1>
            <div className="app-tabs">
                {
                    tabs.map(tab => <div className={tab.id === activeId ? "tab active" : "tab"} key={tab.id}>
                                        <input id="tab-one" type="checkbox" name="tabs" />
                                        <label htmlFor="tab-one" onClick={() => toggleId(tab.id)}>
                                            {tab.title}
                                        </label>
                                        <div className="tab-content">
                                            <p>
                                                {tab.description}
                                            </p>
                                        </div>
                                    </div>)
                }
            </div>
            </div>
        </div>
    )
};