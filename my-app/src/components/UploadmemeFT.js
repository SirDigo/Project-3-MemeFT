import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function UploadmemeFT({uploadMeme, users}) {

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    creator: "",
    owner: users[3].username,
    sale: true,
    user_id: users[3].id,
    src: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("onSubmit triggered");
    e.preventDefault();
    uploadMeme(formData);
    e.target.reset();
  };

  return (
    <div className='App'>
      <h1 style={{color:'#7FFFD4'}} className='m-5'>Upload a MemeFT</h1>
        <Container>
          <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign: "center", alignItems: "center"}} onSubmit={onSubmit}>
            <Form.Group >
              <Form.Label style={{color:'#7FFFD4'}}>MemeFT Title</Form.Label>
              <Form.Control className='mb-3' type="text" name="title" placeholder="Add Title..." onChange={handleChange}/>

              <Form.Label style={{color:'#7FFFD4'}}>Price </Form.Label>
              <Form.Control className='mb-3' type="integer" name="price" placeholder="Add Price..." onChange={handleChange}/>

              <Form.Label style={{color:'#7FFFD4'}}>Creator  </Form.Label>
              <Form.Control className='mb-3' type="text" name="creator" placeholder="Add Creator..." onChange={handleChange}/>

              <Form.Label style={{color:'#7FFFD4'}}>MemeFT Image </Form.Label>
              <Form.Control className='mb-3' type="url" name="src" placeholder="Add Image..." onChange={handleChange}/>

              <Row>
                <Form.Label className='mb-3' style={{color:'#7FFFD4'}}>For Sale Status </Form.Label>
                  <Col>
                    <Form.Label style={{color:'#7FFFD4'}}>True</Form.Label>
                    <Form.Check type="radio" name="sale" placeholder="True" value={true} onChange={handleChange}/>
                  </Col>
                  <Col>
                    <Form.Label style={{color:'#7FFFD4'}}>False</Form.Label>
                    <Form.Check type="radio" name="sale" placeholder="False" value={false} onChange={handleChange}/>
                  </Col>
              </Row>
              <Button variant='secondary' className="button" type="submit" style={{background:'#FFD700', color: '#778899'}}> Upload MFT </Button>
            </Form.Group>
          </Form>
        </Container>
    </div>
  );
}

export default UploadmemeFT;
   