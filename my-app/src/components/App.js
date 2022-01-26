import React from 'react';
import Collection from './Collection';
import Store from './Store';
import NavBar from './NavBar';
import MemeCurations from './MemeCurations';
import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
    const [memeFT, setMemeFTs] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:9292/`)
        .then(resp => resp.json())
        .then(data => setMemeFTs(data))
        .catch(error => alert(error))
    },[])

    // function handleAddBook(newBook) {
    //   const newBookArray = [newBook, ...books];
    //   setBooks(newBookArray)
    // }

  return (
    <div>

      <NavBar />

      <Switch>

        {/* <Route path='/books/:id'>
          <Descriptions handleAddBook={handleAddBook} />
        </Route> */}

        <Route path='/collection'>
          <Collection />
        </Route>

        <Route path='/meme_curations'>
          <MemeCurations />
        </Route>

        <Route path='/store'>
          <Store />
        </Route>

      </Switch>

    </div>
  );
}

export default App;