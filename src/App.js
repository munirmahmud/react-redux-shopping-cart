import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SingleProduct from './components/Products/SingleProduct/SingleProduct';
import Home from './pages/Home';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product-details/:id" component={SingleProduct} />
            </Switch>
        </Provider>
    );
};

export default App;
