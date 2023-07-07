import "./Aboutsection.css";

export default function AboutSection() {
  return (
    <>
    
    <section className="section">
        <h1>About Us</h1>
        <img className="section_img_rigth" src="https://anargasimov1.github.io/projekt/src/images/hero-shape.png%20(1).webp" alt="cake"/>
        <img className="section_img_left" src="https://anargasimov1.github.io/projekt/src/images/about.png.webp" alt="cake"/>
    </section>
   

    <div className="about">
        <div className="about_img">
            <img src="https://anargasimov1.github.io/projekt/src/images/about.png.webp" alt="about"/>
        </div>
        <div className="about_title">
            <p className="about_head">Fresh & Delicious</p>
            <h3 className="about_h3">
                A Simple Way to Eating Delicious
            </h3>
            <span className="span">
                Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning
                laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, quis nostrud exer.
            </span>
            <button className="about_btn" type="button">Our Story</button>
        </div>
        <img className="about_img1" src="https://anargasimov1.github.io/projekt/src/images/services-shape.png.webp" alt="servis"/>
    </div>
    
    
    </>
  )
}
