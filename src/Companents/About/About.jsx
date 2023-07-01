import "./About.css";

export default function About() {
    return (
        <>

            <div className="about">
                <div className="about_img">
                    <img src="./src/images/about.png.webp" alt="about" />
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
                <img className="about_img1" src="./src/images/services-shape.png.webp" alt="servis" />
            </div>
            <div className="feature">
                <div className="featur">
                    <span>Our Features</span>
                    <h3>Quality is Our First Priority</h3>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="./src/images/icon1.svg" alt="icon" />
                        <p>Pet Boarding</p>
                        <span>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna
                            aliqua.</span>
                    </div>
                    <div className="card">
                        <img src="./src/images/icon1.svg" alt="icon" />
                        <p>Pet Boarding</p>
                        <span>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna
                            aliqua.</span>
                    </div>
                    <div className="card">
                        <img src="./src/images/icon1.svg" alt="icon" />
                        <p>Pet Boarding</p>
                        <span>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna
                            aliqua.</span>
                    </div>
                </div>
            </div>
            <div class="video">
                <iframe width="90%" height="576" src="https://www.youtube.com/embed/c2QJ6_2j-jA" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </>
    )
}
