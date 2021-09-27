import React from 'react'
import Form from './Form'
import imagenVino from '../images/vinos.jpg'
import imagenBarril from '../images/barril.jpg'
import imagenSpagueti from '../images/pasta-fettuccine-con.jpg'
import imagenPan from '../images/wine-basket.jpg'
import imagenMenu from '../images/menu.png'
import 'bootstrap/dist/css/bootstrap.css';

export default function Layout() {
    return (
        <div>
            <div className="container">
                <header>
                    <div>
                        
                    </div>
                </header>
                <main className="container__main">
                    <div className="container__left">
                        <h3>Mangiare per vivere e non vivere per mangiare</h3>
                        <img src={imagenVino} className="imagen" id="imagenVino" alt=""></img>
                        <img src={imagenMenu} className="imagen" id="imagenMenu" alt="" hidden={true}></img>
                    </div>

                    <div className="container__middle">
                        <img src={imagenSpagueti} className="imagen" alt=""></img>
                        <img src={imagenPan} className="imagen" alt=""></img>
                        <img src={imagenBarril} className="imagen" alt=""></img>
                    </div>

                    <nav className="container__right">
                        <h3>Fare una spaghettata</h3>
                        <br />
                        <br />
                        < Form />
                    </nav>
                </main>
            </div>
        </div>
    )
}
