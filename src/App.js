import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default App;
