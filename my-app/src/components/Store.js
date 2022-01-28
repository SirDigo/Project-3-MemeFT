import React from 'react';
import {  Card, Container, Button, Row } from 'react-bootstrap';
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
        <Container>
            <div className='App'>
                <h1 style={{color:'#7FFFD4'}}>Welcome to the Store</h1>
                <Row>
                {memesForSale.map(random => 
                    <Card key={random.id} style={{ background: '#ADD8E6', width: "400px", height: "500px", padding: "10px", margin: "10px"}}>
                        <div key={random.id}>
                            <Card.Title style={{color: 'black'}}>{random.title}</Card.Title>
                            <Card.Img src={random.src} style={{ width: "200px", height: "200px"}} alt={random.title}/>
                                <Card style={{background:'#778899', color:'#7FFFD4'}} className = 'm-4' >
                                    <Card.Text>Price: {random.price} 💎</Card.Text>
                                    <Card.Text>Owner: {random.owner}</Card.Text>
                                    <Card.Text>Creator: {random.creator}</Card.Text>
                                    <Card.Footer>MFT ™️</Card.Footer>
                                    <Button variant='secondary' className="button" type="submit" style={{background:'#FFD700', color: '#778899'}} onClick={() => handleSold(random)}>Buy</Button>
                                </Card>
                        </div>
                    </Card>       
                )}
                </Row>
            </div>
        </Container>
    )
}

export default Store;