import "./Swiper.css";
import { useEffect, useState } from "react";
import Items from "../Items/Items";

export default function Swiper() {

    const [count, setCount] = useState(0)

    const url = "https://hilarious-rectangular-principle.glitch.me/swiper";
    const [praducts, setPraducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => setPraducts(data))
    }, [])

    return (
        <main className="swiper">
            <div className="swiper_title">
                <p>Most popular</p>
                <i>Our Exclusive Cake</i>
            </div>
            <div className="swiper_content">
                <div style={{ transform: `translateX(${365 * -count}px)` }} className="swiper_slide" id="swiper_slide">
                    {
                        praducts.map(i =>
                            <Items key={i.id} img={i.img} title={i.title} description={i.description} />
                        )
                    }
                </div>
            </div>
            <button onClick={() => count > 0 && setCount(count - 1)} className="btn_left" id="btn_left"><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={() => count < praducts.length - 3 && setCount(count + 1)} className="btn_rigth" id="btn_rigth"><i className="fa-solid fa-chevron-right"></i></button>
        </main >

    )
}
