import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AddItem from './AddItem';
import ItemsList from './ItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href='/ItemsList' className='navbar-brand'>
            logo
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/ItemsList'} className='nav-link'>
                View Lists
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/AddItem'} className='nav-link'>
                Create New
              </Link>
            </li>
          </div>
        </nav>
        <div className='container mt-3'>
          <h2>Selection:</h2>
          <Switch>
            <Route exact path='/ItemsList' component={ItemsList} />
            <Route exact path='/AddItem' component={AddItem} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
