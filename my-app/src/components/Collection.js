import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Collection ({memeFTs}) {
    
    return(

        <div className='App'>
            <h1 style={{color:'#7B68EE'}}>Full Collection</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly",alignItems: "center"}}>
            {memeFTs.map((memeFT) => (

            
            <div key= {memeFT.id}>
               
                    <div style={{ width: "400px", height: "400px", padding: "10px", margin: "10px", border: "50px solid green"}}>
                        <h1>{memeFT.title}</h1>
                        <img src={memeFT.src} style={{ width: "200px", height: "200px"}} alt={memeFT.title}/>
                        <p>Price: {memeFT.price}💎</p>
                        
                    
                    </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Collection;