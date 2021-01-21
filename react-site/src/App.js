import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CreateList from './CreateList';
import LoadingList from './LoadingList.js';

function App() {
  const [loading, setLoading] = useState(true);

  if (!loading) {
    return (
      <main>
        <LoadingList />
      </main>
    );
  }
  return (
    <div className='App'>
      <div className='container'>
        <nav>
          <a href='/'>logo</a>
          <div>
            <li>
              <Link to={'/'}>View Lists</Link>
            </li>
            <li>
              <Link to={'/CreateList'}>Create New</Link>
            </li>
          </div>
        </nav>
        <div>
          <h2>Selection:</h2>
          <Switch>
            <Route exact path='/CreateList' component={CreateList} />
            {/* <Route exact path={['/', 'displayLists']} component={DisplayLists} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
