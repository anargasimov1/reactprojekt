import "./AboutFooter.css";
import { useState } from "react";

export default function AboutFooter() {

    const [temp, setTemp] = useState(0);
    return (
        <>
            <div className="footer_swiper">
                <div className="footer_swiper_content">
                    <div className="footer_swiper_items" style={{ transform: `translateX(${500 * -temp}px)` }}>

                        <div className="footer_swiper_slide">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                                ipsam.
                                working."</p>
                            <div className="items">
                                <img src="https://anargasimov1.github.io/projekt/src/images/Homepage_testi.png.webp" alt="..." />
                                <div className="items2">
                                    <p>Joker Artur</p>
                                    <i>Developer</i>
                                </div>
                            </div>
                        </div>

                        <div className="footer_swiper_slide">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                                ipsam.
                                working."</p>
                            <div className="items">
                                <img src="https://preview.colorlib.com/theme/cakes/assets/img/gallery/Homepage_testi2.png" alt="..." />
                                <div className="items2">
                                    <p>Olivia Jems</p>
                                    <i>UIX Desinger</i>
                                </div>
                            </div>
                        </div>


                        <div className="footer_swiper_slide">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                                ipsam.
                                working."</p>
                            <div className="items">
                                <img src="https://anargasimov1.github.io/projekt/src/images/Homepage_testi.png.webp" alt="..." />
                                <div className="items2">
                                    <p>Joker Artur</p>
                                    <i>Developer</i>
                                </div>
                            </div>
                        </div>

                        <div className="footer_swiper_slide">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                                ipsam.
                                working."</p>
                            <div className="items">
                                <img src="https://preview.colorlib.com/theme/cakes/assets/img/gallery/Homepage_testi2.png" alt="..." />
                                <div className="items2">
                                    <p>Olivia Jems</p>
                                    <i>UIX Desinger</i>
                                </div>
                            </div>
                        </div>



                        <div className="footer_swiper_slide">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                                ipsam.
                                working."</p>
                            <div className="items">
                                <img src="https://anargasimov1.github.io/projekt/src/images/Homepage_testi.png.webp" alt="..." />
                                <div className="items2">
                                    <p>Olivia Jems</p>
                                    <i>UIX Desinger</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_swiper_slide_hidden">
                    <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a iste fugit deserunt soluta
                        ipsam.
                        working."</p>
                    <div className="items">
                        <img src="https://anargasimov1.github.io/projekt/src/images/Homepage_testi.png.webp" alt="..." />
                        <div className="items2">
                            <p>Olivia Jems</p>
                            <i>UIX Desinger</i>
                        </div>
                    </div>
                </div>



                <button onClick={() => temp < 3 && setTemp(temp + 1)} className="footer_swiper_button_rigth" type="button"><i
                    className="fa-solid fa-chevron-right"></i></button>
                <button onClick={() => temp > 0 && setTemp(temp - 1)} className="footer_swiper_button_left" type="button"><i className="fa-solid fa-chevron-left"></i></button>
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
