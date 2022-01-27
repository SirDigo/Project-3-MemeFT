import React, { useState } from "react";
import { Button, Card, Form, Container, Image, } from "react-bootstrap";

function UploadmemeFT({uploadMeme}) {
  
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    Creator: "",
    Owner: "",
    for_sale: false,
    user_id: 0,
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
    <div>
      <Container>
        <Form style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",
        textAlign: "center",
        alignItems: "center",
      }}
      onSubmit={onSubmit}
      >
          <Card>
              <div>
                <label>MemeFT Title</label>
                <input type="text" name="title" placeholder="MemeFT Title" onChange={handleChange}/>
              </div>
              <div>
                <label>Price </label>
                <input type="integer" name="price" placeholder="Price" onChange={handleChange}/>
              </div>

              <div>
                <label>Creator  </label>
                <input
                  type="text"
                  name="creator"
                  placeholder="Creator"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>MemeFT Upload </label>
                <input type="url" name="memeFT" placeholder="MemeFT Image" onChange={handleChange}/>
              </div>
              <div>
                <label>For Sale: </label>
                <label>True</label>
                <input type="checkbox" name="true" placeholder="True" onChange={handleChange}/>
                <label>False</label>
                <input type="checkbox" name="false" placeholder="False" onChange={handleChange}/>
              </div>
              <div>
                <label>User ID </label>
                <input
                  type="integer"
                  name="user_id"
                  placeholder="User ID"
                  onChange={handleChange}
                />
              </div>
           
            <Button className="button" type="submit">
              Add MemeFT
            </Button>
            
          </Card>
        </Form>
      </Container>
    </div>
  );
}

export default UploadmemeFT;
