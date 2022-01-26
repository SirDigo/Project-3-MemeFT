import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

function NavBar () {

    return(
        <div>
            <Navbar sticky='top'>
                <Container>
                        <NavLink
                        to='/collection'
                        exact
                        style={{
                            display: "inline-block",
                            width: "66px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}
                        >
                            Collection
                        </NavLink>

                        <NavLink
                        to='/meme_curations'
                        exact
                        style={{
                            display: "inline-block",
                            width: "98px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}
                        >
                            Meme Curations
                        </NavLink>

                        <NavLink
                        to='/store'
                        exact
                        style={{
                            display: "inline-block",
                            width: "66px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}>
                            Store
                        </NavLink>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;