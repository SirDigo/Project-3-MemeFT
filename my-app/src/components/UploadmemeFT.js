import React, { useState } from "react";
import { Button, Card, Form, Container, Image, } from "react-bootstrap";

function UploadmemeFT({uploadMeme, users}) {
  
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    creator: "",
    owner: users[3].user_name,
    for_sale: true,
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
    <div>
      <Container>
        <Form style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
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
                <input type="url" name="src" placeholder="MemeFT Image" onChange={handleChange}/>
              </div>
              <div>
                <label>For Sale: </label>
                <label>True</label>
                <input type="radio" name="for_sale" placeholder="True" value={true} onChange={handleChange}/>
                <label>False</label>
                <input type="radio" name="for_sale" placeholder="False" value={false} onChange={handleChange}/>
              </div>
              {/* <div>
                <label>User ID </label>
                <input
                  type="integer"
                  name="user_id"
                  placeholder="User ID"
                  onChange={handleChange}
                />
              </div> */}
           
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




      
   