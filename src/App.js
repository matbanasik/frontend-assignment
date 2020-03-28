import React from 'react';
import Articles from './Components/Articles';
import SourceFilters from './Components/SourceFilters/SourceFilters';
import './index.scss';

const App = () => {
    return (
        <div className="bd-main-container container media">
            <SourceFilters />
            <Articles />
        </div>
    )
}

export default App;