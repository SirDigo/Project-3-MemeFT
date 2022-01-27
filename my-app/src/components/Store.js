import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Store () {

function handleClick(){
  const  array= [ 1,2,3,4,5,6]
   var randomizer= array[Math.floor(Math.random()*array.length)];
    return console.log(randomizer);
}
    return(
        <div className='App'>
            <Container>
                <h1 style={{color:'#000000'}}>Welcome to the Store</h1>
                    <Card>
                    <Button onClick={()=>handleClick()}>Randomizer</Button>
                    </Card>
                    
            </Container>
        </div>
    )
}

export default Store;