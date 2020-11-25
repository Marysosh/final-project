import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import Caught from './components/Caught';
import PokemonPage from './components/PokemonPage';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/caught' component={Caught}/>
                        <Route path='/:card_id' component={PokemonPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App