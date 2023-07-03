import "./Footer.css";
import { useState, useEffect } from "react";
export default function Footer() {
    const url = "https://fluoridated-psychedelic-billboard.glitch.me/mesages"

    const [mesaj, setMesaj] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const mesage = { mesaj, name, mail };

    function addmesage() {
        if (mesaj !== "" && name !== "" && mail !== "")
           {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mesage)
            })
           }
          setMail("");
          setMesaj("");
          setName("")

    };


    return (
        <>

            <div className="message">
                <div className="inputs">
                    <p>Get In Touch</p>
                    <input value={mesaj}  onInput={e => setMesaj(e.target.value)} className="mesaj" type="text" placeholder="your message" />
                    <div className="email">
                        <input value={name} onInput={e => setName(e.target.value)} className="name" type="text" placeholder="name" />
                        <input value={mail} onInput={e => setMail(e.target.value)} className="mail" type="email" placeholder="Email" />
                    </div>
                    <input className="subject" type="text" placeholder="subject" />
                    <button onClick={() => addmesage()} type="button" id="btn1">SEND</button>
                </div>
                <div className="adres">
                    <div className="adreses">
                        <i className="fa-solid fa-house-chimney"></i>
                        <div className="adress">
                            <p>Buttonwood, Californiya.</p>
                            <i>Rosemead, CA 91170</i>
                        </div>
                    </div>
                    <div className="phones">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <div className="phone">
                            <p>+1 253 565 2354</p>
                            <i>Mon to Fri 9am 6pm</i>
                        </div>
                    </div>
                    <div className="support">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="supports">
                            <p>support@colorin.com</p>
                            <i>Send us your anytime</i>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
