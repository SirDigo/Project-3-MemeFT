import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons";

function MemeCurators ({users}) {
  console.log(users)
    return(
      <div className='App'>
        <Container>
          <h1 style={{color:'#7FFFD4'}}>MemeFT Curators</h1>
            <Row>
              {users.map((user) => (
                <IconContext.Provider value={{color: "black", size: "3em"}}>
                    <Card style={{ background: '#ADD8E6', width: "400px", height: "250px", padding: "10px", margin: "10px"}}>
                      <Card.Title>{user.username}</Card.Title>
                      <Card.Text style={{color: '#778899'}}>{user.about}</Card.Text>
                      <a href={user.links} title={user.username}> {" "} <FaGithub/> </a>
                    </Card>         
                </IconContext.Provider>
              ))}
            </Row>
        </Container>
      </div>
    )
}

export default MemeCurators;