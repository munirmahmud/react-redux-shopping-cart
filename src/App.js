import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Provider>
    );
};

export default App;
