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


  function handleMemes (data) {
    const newMemes = memeFTs.map((meme) => {
      if (meme.id === data.id) {
        meme.sale = false
        meme.owner = "Master69"
        meme.user_id = 3
      } else {
        return meme
      }})
      setMemeFTs(newMemes)
  }

  const buyMeme = (random) => {

    fetch(`http://localhost:9292/memefts/${random.id}`,{
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sale: random.sale
      }),
    })
    .then(resp => resp.json())
    .then(data => handleMemes(data))
    }


  return (
    <div>

      <NavBar />

      <Switch>

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