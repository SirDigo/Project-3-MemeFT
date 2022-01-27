import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons";

function MemeCurators ({users}) {


    return(
      <div className='App'>
        <h1 style={{color:'#7B68EE'}}>Meme Curators</h1>
      {users.map((user) => (
        <IconContext.Provider value={{color: "black", size: "3em"}}>
        
            <Container>
                    <Card>

<div>
<p>{user.username}</p>
        <a
          href={user.links}
          title={user.username}
        >
          {" "}
          <FaGithub/>
        </a>
</div>

                    </Card>
                    </Container>
                    
        </IconContext.Provider>
        ))}
        </div>
    )
}

export default MemeCurators;