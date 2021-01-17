import React, { useEffect, useState } from 'react';
import './App.css';
import CreateList from './CreateList';
import List from './List.js';
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
        <h1>Products</h1>
        <CreateList />
      </div>
      <footer>
        <div className='footer'></div>
      </footer>
    </div>
  );
}
export default App;
