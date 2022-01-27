import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';



const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    // background: "black",
    textDecoration: "none",
    color: "#7FFFD4",
    textAlign: "center"
  };

function NavBar () {

    return(
        <div>
            <Navbar sticky='top'>
                <Container>
                        <NavLink
                        to='/collection'
                        exact
                        style={linkStyles}
                        activeStyle={{
                          color: '#FFD700',
                        }}
                        >
                            Collection
                        </NavLink>

                        <NavLink
                        to='/meme_curators'
                        exact
                        style={linkStyles}
                        activeStyle={{
                          color: '#FFD700',
                        }}
                        >
                         Curators
                        </NavLink>

                        <NavLink
                        to='/uploadmemeFT'
                        exact
                        style={linkStyles}
                        activeStyle={{
                          color: '#FFD700',
                        }}
                        >
                            MemeFT
                        </NavLink>


                        <NavLink
                        to='/store'
                        exact
                        style={linkStyles}
                        activeStyle={{
                          color: '#FFD700',
                        }}>
                            Store
                        </NavLink>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;