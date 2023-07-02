import "./AboutFooter.css";

export default function AboutFooter() {
    return (
        <>
            <div className="footer_swiper">
                <div className="footer_swiper_content">
                    <div className="footer_swiper_items">
                    </div>


                </div>
                <div className="footer_swiper_slide_hidden">
                    <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                        ipsam.
                        working."</p>
                    <div className="items">
                        <img src="./src/images/Homepage_testi.png.webp" alt="..." />
                        <div className="items2">
                            <p>Olivia Jems</p>
                            <i>UIX Desinger</i>
                        </div>
                    </div>
                </div>

                <button className="footer_swiper_button_rigth" type="button"><i
                    className="fa-solid fa-chevron-right"></i></button>
                <button className="footer_swiper_button_left" type="button"><i className="fa-solid fa-chevron-left"></i></button>
            </div>
            <div className="footer_img">
                <div className="img1"><i
                    className="fa-brands icon1 fa-instagram icon"></i></div>
                <div className="img2"><i
                    className="fa-brands icon2 fa-instagram icon"></i></div>
                <div className="img3"><i
                    className="fa-brands icon3 fa-instagram icon"></i></div>
                <div className="img4"><i
                    className="fa-brands icon4 fa-instagram icon"></i></div>
            </div>


        </>
    )
}
