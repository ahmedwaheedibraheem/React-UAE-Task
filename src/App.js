import React, { Component } from 'react';
import './Theme/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navbar/navbar';
import Home from './containers/home/home';
import Error from './components/errors/error';
import Edit from './containers/edit/edit';
import About from './components/about-us/about-us';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/error" component={Error} />
            <Route path="/about" component={About} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/" component={Home} />
            {/* Not Found */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
