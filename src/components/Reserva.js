import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function reserva({ reservaciones} ) {
    let reservacion = [];
    const {id, dservice, ddate, dtime, dnameasistant, dmobile, dcomments, dstatus} = reservacion

    let tServicio = (servicio) =>{
        switch (servicio) {
            case '1':
              return 'Breakfast'
            case '2':
                return 'Lunch'
            case '3':
                return 'Dinner'
            default:
                return 'Dinner'
          }
    }
    
    return (
        <Fragment>
            { reservaciones.map((reservacion) => (
                <tr>
                    <th scope="row"> {reservacion.id} </th>
                    <td>{tServicio(reservacion.dservice)}</td>
                    <td>{reservacion.ddate}</td>
                    <td>{reservacion.dtime}</td>
                    <td>{reservacion.dnameasistant}</td>
                    <td>{reservacion.dmobile}</td>
                    <td>{reservacion.dcomments}</td>
                    <td>{reservacion.dstatus}</td>
                </tr>
            ))}
        </Fragment>
    )
}
