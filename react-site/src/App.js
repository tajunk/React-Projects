import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import AddItem from './AddItem';
import ItemsList from './ItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/ItemsList' className='navbar-brand'>
          <img src={logo} alt='logo' className='logo'></img>
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/ItemsList'} className='nav-link'>
              View List
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/AddItem'} className='nav-link'>
              Add Items
            </Link>
          </li>
        </div>
      </nav>
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/ItemsList' component={ItemsList} />
          <Route exact path='/AddItem' component={AddItem} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
