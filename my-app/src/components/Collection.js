import React from 'react';
import {  Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Collection ({memeFTs}) {
    
const notForSale = memeFTs.filter(memeFT=> !memeFT.sale)

    return(
        <Container>
            <div className='App'>
                    <h1 style={{color:'#7FFFD4'}}>Our Collection</h1>
                    <Row>
                        {notForSale.map((memeFT) => (
                            <Card style={{ background: '#ADD8E6', width: "400px", height: "450px", padding: "10px", margin: "10px"}}>
                                <div key= {memeFT.id}>
                                    <Card.Title style={{color: 'black'}}>{memeFT.title}</Card.Title>
                                    <Card.Img src={memeFT.src} style={{ width: "200px", height: "200px"}} alt={memeFT.title}/>
                                        <Card style={{background:'#778899', color:'#7FFFD4'}} className = 'm-4' >
                                            <Card.Text>Price: {memeFT.price} 💎</Card.Text>
                                            <Card.Text>Owner: {memeFT.owner}</Card.Text>
                                            <Card.Text>Creator: {memeFT.creator}</Card.Text>
                                            <Card.Footer>MFT ™️</Card.Footer>
                                        </Card>
                                </div>
                            </Card>
                        ))}
                    </Row>
            </div>
        </Container>
    )
}

export default Collection;