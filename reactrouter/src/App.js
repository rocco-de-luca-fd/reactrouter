import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/** Switch risolve il problema di accavallamento delle pagine
         * quindi Switch fa vedere sl un componente alla volta
        */}
        <Switch>
          {/*qui stamo dando la path*/}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:id" component={Post} />
        </Switch>


      </div>
    </Router>

  );
}

export default App;
