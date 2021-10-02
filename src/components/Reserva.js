import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';

const firebaseConfig = ({
    apiKey: "AIzaSyAUETMk4syHnqxWXO4DcDrIkDFMLTfxOys",
    authDomain: "gerpax-proyecto1.firebaseapp.com",
    databaseURL: "https://gerpax-proyecto1-default-rtdb.firebaseio.com",
    projectId: "gerpax-proyecto1",
    storageBucket: "gerpax-proyecto1.appspot.com",
    messagingSenderId: "889817513002",
    appId: "1:889817513002:web:208eb7763fbc4740699753",
    measurementId: "G-ZD179P9Y1K"
  })

export default function reserva( {reservaciones} ) {
    
    async function handleClickChange(e) {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const obj = e.target;
        
        const reservacionRef = doc(db, "messages", obj.id);
        await updateDoc(reservacionRef, {
            dstatus: 'Activa'
          });
    }

    async function handleClickDel(e) {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const obj = e.target;
        
        await deleteDoc(doc(db, "messages", obj.id));
    }

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
                <tr key={reservacion.id}>
                    <td>{tServicio(reservacion.dservice)}</td>
                    <td>{reservacion.ddate}</td>
                    <td>{reservacion.dtime}</td>
                    <td>{reservacion.dnameasistant}</td>
                    <td>{reservacion.dmobile}</td>
                    <td>{reservacion.dcomments}</td>
                    <td> <input type="checkbox" id={reservacion.id} onChange={(e) => handleClickChange(e)} /> {reservacion.dstatus}</td>  
                    <td><button type="submit" className="btn btn-secondary" id={reservacion.id} onClick={(e) => handleClickDel(e)}>Delete</button></td>
                </tr>
            ))}
        </Fragment>
    )
}
