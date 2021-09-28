import React, { useState, useEffect }  from 'react';
import { useRef } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Reserva  from './Reserva';

let UrlG=''
let datos = [{id:'', dservice:'', ddate:'', dtime:'', dnameasistant:'', dmobile:'', dcomments:'', dstatus:''}];

export default function Reservaciones() {
    const bReserva = useRef();
    const [reservaciones, SetReservaciones] = useState([])
    
    function leeReservas(){
        axios.get(UrlG)
        .then(res => {
            datos = res.data;
            SetReservaciones(datos.data) 
        })        
    }

    return (
        <div className="reservaciones">
            <div className="container__res_left">

            </div>
            <div className="container__res" id="tablaRes" hidden={true}>
                <h3 className="lReservacion">Reservations</h3>
                <div className="col-12 ">
                    <div className="input-group">
                        <input ref={bReserva} className="form-control" type="text"  placeholder="Reservations name"/>
                        <button type="submit" className="btn btn-primary" id="verReserva" onClick={leeReservas}>Search...</button>
                    </div>
                </div>  
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Service</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        < Reserva reservaciones = { reservaciones } />
                    </tbody>
                </table>   
            </div>
            <div className="container__res_left">
                
            </div>
        </div>
    )
}
