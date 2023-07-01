import "./Contact.css";

export default function Contact() {
  return (
    
     <div className="contact">
        <div className="contact_logo">
            <img src="./src/images/logo.png.webp" alt=""/>
            <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris
                nisi ufsit aliquip.</p>
            <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-twitter"></i>
            </div>

        </div>
        <div className="contact_nav">
            <span>Quick Links</span>
            <a href="./index.html">Home</a>
            <a href="./about.html">About</a>
            <a href="">Services</a>
            <a href="">Bloq</a>
            <a href="">Contact</a>

        </div>
        <div className="contact_cake">
            <p>Cakes</p>
            <label>Blackforest</label>
            <label>Bodhubon</label>
            <label>Rongdhonu</label>
            <label>Meghrong</label>
        </div>
        <div className="contact_us">
            <p>Contact US</p>
            <span>76/A, Green Lane, Dhanmodi NYC</span>
            <a>+10(78) 738-3384</a>
        </div>
    </div>

  )
}
