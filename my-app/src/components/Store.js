import React from 'react';
import {  Card, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Store ({ memeFTs, buyMeme }) {

    const memesForSale = memeFTs.filter(memeFT => memeFT.sale);

    function handleSold(random) {
        random.sale = false
        random.owner = "Master69"
        random.user_id = 3
        buyMeme(random)
    }

    return(
        <div className='App'>
            <Container>
                <h1 style={{color:'#000000'}}>Welcome to the Store</h1>
                {memesForSale.map(random => 
                    <Card key={random.id}>
                        <img src={random.src}/>
                        <button onClick={() => handleSold(random)}>Buy</button>
                    </Card>       
                )}
            </Container>
        </div>
    )
}

export default Store;