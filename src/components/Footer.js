import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Footer() {
    return (  
    <footer className="text-center footer-style">
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-col">
                    <h3>Hours & Location</h3>
                    <p>
                        551 5th Ave, <br />
                        New York, NY 10017<br />
                        (212) 972-3315<br />

                        SUN: 4:00 PM - 9:00 PM<br />
                        MON: 12:00 PM - 9:00 PM<br />
                        TUE - FRI: 12:00 PM - 10:00 PM<br />
                        SAT: 4:00 PM - 10:00 PM<br />
                    </p>
                </div>
                <div className="col-md-4 footer-col" id="spacelEvents" hidden={true}>
                    <h3>Special Events</h3>
                    <p>
                    We strives to bring its guests the very best...whether that's through our Chef-driven food, our modern wine & spirits program, or our legendary, hospitable service. We aim to give our guests access to exclusive, behind-the-scenes Prime Events at Diavolo's®! We look forward to hosting you at one of our next "Prime Events"  that feature seasonal mixology classes, wine & chocolate pairings, winemaker dinners, rare scotch tastings, and so much more!
                    Join our mailing list to be the first to hear about upcoming events. 
                    </p>
                </div>
                <div className="col-md-4 footer-col">
                    <h3>At your service</h3>
                    <ul>
                        <li>Professional staff</li>
                        <li>Diavolo's signature menu and award-winning wine list</li>
                        <li>State-of-the-art A/V equipment</li>
                        <li>All the extras, including floral arrangements and valet service</li>
                    </ul>

                </div>
            </div>
        </div>
    </footer>
    )
}
