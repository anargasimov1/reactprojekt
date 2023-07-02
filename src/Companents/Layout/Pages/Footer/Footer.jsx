import "./Footer.css";

export default function Footer() {
  return (
    <>
    
    <div className="message">
        <div className="inputs">
            <p>Get In Touch</p>
            <input className="mesaj" type="text" placeholder="your message"/>
            <div className="email">
                <input className="name" type="text" placeholder="name"/>
                <input className="mail" type="email" placeholder="Email"/>
            </div>
            <input className="subject" type="text" placeholder="subject"/>
            <button type="button" id="btn1">SEND</button>
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
