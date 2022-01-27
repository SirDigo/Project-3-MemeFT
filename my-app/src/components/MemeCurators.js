import React from 'react';
// import { useState, useEffect } from 'react';
import {  Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons";

function MemeCurators ({users}) {


    return(
        <IconContext.Provider value={{color: "black", size: "3em"}}>
        <div className='App'>
            <Container>
                <h1 style={{color:'#7B68EE'}}>Meme Curations</h1>
                    <Card>

<div>
<p>Johnny Wu</p>
        <a
          href={"https://github.com/MemeEngineer"}
          title="MemeEngineer"
        >
          {" "}
          <FaGithub/>
        </a>
</div>
                    </Card>
                    <Card>
<div>
<p>Caleb Rodriguez</p>
        <a
          href={"https://github.com/SirDigo"}
          title="SirDigo"
        >
          {" "}
          <FaGithub/>
        </a>
</div>
                    </Card>
                    <Card>
<div>
<p>Jason Botesazan</p>
        <a
          href={"https://github.com/jbotesazan"}
          title="jbotesazan"
        >
          {" "}
          <FaGithub/>
        </a>
</div>
                    </Card>


            </Container>
        </div>
        </IconContext.Provider>
    )
}

export default MemeCurators;