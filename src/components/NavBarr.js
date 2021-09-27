import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

let verRes = true;
let verSpec = true;
let verMenu = true;

export default function NavBarr() {
    const ShowMenu = () => {
        const imagenVino = document.getElementById("imagenVino")
        const imagenMenu = document.getElementById("imagenMenu")
        if (verMenu){
            imagenMenu.hidden = false;
            imagenVino.hidden = true;
        }
        else{
            imagenMenu.hidden = true;
            imagenVino.hidden = false;
        }
        verMenu = !verMenu
    }

    const ShowSpecial = () => {
        const specialEvent = document.getElementById("spacelEvents")
        if (verSpec){
            specialEvent.hidden = false;
        }
        else{
            specialEvent.hidden = true;
        }
        verSpec = !verSpec
    }

    const ShowReservations = () => {
        const tabla = document.getElementById("tablaRes")
        if (verRes){
            tabla.hidden = false;
        }
        else{
            tabla.hidden = true;
        }
        verRes = !verRes
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    Tentazione del Diavolo
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#menu" onClick={ShowMenu}>Menu</Nav.Link>
                        <Nav.Link href="#special" onClick={ShowSpecial}>Special events</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#reservations" onClick={ShowReservations}>Reservations</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
