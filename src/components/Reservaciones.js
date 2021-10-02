import React, { useState, useEffect }  from 'react';
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Reserva  from './Reserva';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, where  } from 'firebase/firestore/lite';

const firebaseConfig = ({
    apiKey: process.env.apiKey,
    authDomain: "gerpax-proyecto1.firebaseapp.com",
    databaseURL: "https://gerpax-proyecto1-default-rtdb.firebaseio.com",
    projectId: "gerpax-proyecto1",
    storageBucket: "gerpax-proyecto1.appspot.com",
    messagingSenderId: "889817513002",
    appId: "1:889817513002:web:208eb7763fbc4740699753",
    measurementId: "G-ZD179P9Y1K"
  })
//* {id:'', dservice:'', ddate:'', dtime:'', dnameasistant:'', dmobile:'', dcomments:'', dstatus:''}

export default function Reservaciones() {
    let datos = [];
    const bReserva = useRef();
    const [reservaciones, SetReservaciones] = useState([])

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function leeReservas(){
        let bNombre = ''
        let q='';
        let messagesCol='';
        let snapshot=''

        bNombre= bReserva.current.value
        
        if (bNombre==''){
            messagesCol = collection(db, 'messages');
            snapshot = await getDocs(messagesCol);
        }else{
            q = query(collection(db, "messages"), where("dnameasistant", "==", bNombre));
            snapshot = await getDocs(q);
        }
        snapshot.forEach((doc) => {
            const docData = doc.data()
            datos.push({
            ...docData, 
            })
        })
        
        SetReservaciones(datos.sort(function (a, b) {
            if (a.ddate > b.ddate) {
            return 1;
            }
            if (a.ddate < b.ddate) {
            return -1;
            }
            // a must be equal to b
            return 0;
        }));
        
        bReserva.current.value=null;
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
