import React from 'react';
import Collection from './Collection';
import Store from './Store';
import NavBar from './NavBar';
import MemeCurators from './MemeCurators';
import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import UploadmemeFT from './UploadmemeFT';
import './App.css';

function App() {
    const [memeFTs, setMemeFTs] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:9292/memefts`)
        .then(resp => resp.json())
        .then(data => setMemeFTs(data))
        .catch(error => alert(error))
    },[])

    useEffect(() => {
      fetch(`http://localhost:9292/users`)
        .then(resp => resp.json())
        .then(data => setUsers(data))
        .catch(error => alert(error))
    },[])

//Adding new memeFT from Form
const uploadMeme = (formData) => {
  
  fetch("http://localhost:9292/memefts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((newMeme) => setMemeFTs([...memeFTs, newMeme]));
};


const buyMeme = (random) => {
  fetch(`http://localhost:9292/memefts/${random.id}`,{
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(random),
})
.then(resp => resp.json)
.then(data => setMemeFTs([...memeFTs, data]))
}


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
          <Collection memeFTs={memeFTs}/>
        </Route>

        <Route path='/meme_curators'>
          <MemeCurators users={users} />
        </Route>

        <Route path='/uploadmemeFT'>
          <UploadmemeFT 
          uploadMeme={uploadMeme}
          users={users}
          />
        </Route>

        <Route path='/store'>
          <Store memeFTs={memeFTs}
            buyMeme={buyMeme}
          />
        </Route>

      </Switch>

    </div>
  );
}

export default App;