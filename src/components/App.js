import React from 'react';
import NavBarr  from './NavBarr'
import Layout from './Layout';
import Footer from './Footer'
import Reservaciones from './Reservaciones'
import './styles/layout.css'

export  default function App() {
    return (
        <React.StrictMode>
            <NavBarr />
            <Layout />
            <Reservaciones />
            <Footer />
        
        </React.StrictMode> 
    )
}
