import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';

const { v4: uuidv4 } = require('uuid')

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

export default function Form() {
    const service = useRef();
    const asistnumber = useRef();
    const date = useRef();
    const time = useRef();
    const nameasistant = useRef();
    const mobile = useRef();
    const email = useRef();
    const comments = useRef();

    async function guardaReserva(){
        const dservice = service.current.value;
        const dnumber = asistnumber.current.value;
        const ddate = date.current.value;
        const dtime = time.current.value;
        const dnameasistant = nameasistant.current.value;
        const dmobile = mobile.current.value;
        const demail = email.current.value;
        const dcomments = comments.current.value;
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        
        if ( dservice === '' || dnameasistant==='' || dnumber ==='' || dmobile==='' || ddate==='' || dtime ==='') return;
        
        const id = uuidv4()
        await setDoc(doc(db, "messages",id), {
            id: id,
            dservice: dservice,
            dnumber: dnumber,
            ddate: ddate,
            dtime: dtime,
            dnameasistant: dnameasistant,
            dmobile: dmobile,
            demail: demail,
            dcomments: dcomments,
            dstatus: 'Pendiente'
          });
    }

    const  handelSave = () => {
        
        guardaReserva()

        service.current.value= null;
        asistnumber.current.value= null;
        date.current.value= null;
        time.current.value= null;
        nameasistant.current.value= null;
        mobile.current.value= null;
        email.current.value= null;
        comments.current.value= null;

        window.alert("Appointment registered, you will receive a detailed email");
    }

    return (
        <div>
            <p>Please select a date, along with your option of breakfast, lunch or dinner and number of people in your party to view times available.</p>
            <select className="form-select mb-3"  ref={service}  aria-label="Default select example">
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
            </select>
            <div className="mb-3">
                <input ref={asistnumber} className="form-control" type="text"  placeholder="Assistants"/>
            </div>
            <div className="input-group mb-3">
                <input className="form-control" type="date" ref={date} multiple />
                <input className="form-control" type="time" ref={time} />
            </div>
            <div className="mb-3">
                <input className="form-control" ref={nameasistant} type="text" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <input className="form-control" ref={mobile} type="text" placeholder="Mobile"/>
            </div> 
            <div className="mb-3">
                <input className="form-control" ref={email} type="text" placeholder="email"/>
            </div> 
            <div className="mb-3">
                <textarea className="form-control" ref={comments} rows="3" placeholder="Comments"></textarea>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" id="signin" onClick={handelSave}>Sign in</button>
            </div>   
        </div>
    )
}
