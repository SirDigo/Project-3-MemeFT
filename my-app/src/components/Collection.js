import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Collection () {

    return(
        <div className='App'>
            <Container>
                <h1 style={{color:'#7B68EE'}}>Full Collection</h1>
                    <Card>
                        <Card.Title>Card Title</Card.Title>
                        <img src={''}/>
                        <Card.Text>$</Card.Text>
                        <Card.Text>Creator: Papa Johnny Wu</Card.Text>
                        <Card.Text>Owner: Joe Byron</Card.Text>
                    </Card>
            </Container>
        </div>
    )
}

export default Collection;