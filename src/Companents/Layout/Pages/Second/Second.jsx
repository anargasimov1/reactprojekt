import "./Second.css";
import { useEffect, useState } from "react";

export default function Second(props) {

  const { wishlist, setWishlist } = props

  const url = "https://hilarious-rectangular-principle.glitch.me/swiper";

  const [praducts, setPraducts] = useState([]);
  const [filter, setFilter] = useState("");

  const filtered = praducts.filter(i => i.title.toLowerCase().includes(filter.toLocaleLowerCase()))


  function addwishlist(title, description, img, id) {
    const hearts = { title, description, img, id }
    setWishlist([...wishlist, hearts]);

    localStorage.setItem("wishlist", JSON.stringify(wishlist))

  }




  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => setPraducts(data))
  }, [])

  return (
    <>

      <section className="section">
        <p className="section_index">Delicious</p>
        <h1>Our Praducts</h1>
        <img className="section_img_rigth" src="https://anargasimov1.github.io/projekt/src/images/hero-shape.png%20(1).webp" alt="" />
        <img className="section_img" src="https://anargasimov1.github.io/projekt/src/images/hero-shape.png%20(1).webp" alt="cake" />
      </section>

      <input onInput={e => { setFilter(e.target.value) }} className="search" type="text" placeholder="search" />
      <i className="fa-solid fa-magnifying-glass"></i>
      <div className="main">

        <div className="praducts">
          {
            filtered.map(i =>
                <div className="swiper_slide_item">
                  <div className="img_item"> <img src={i.img} /></div>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <button id="btn3" className="card_btn" type="button">$20 | Oreder Now</button>
                  <button
                    onClick={() => addwishlist(i.title, i.description, i.id, i.img)}
                    type="button"><i className="fa-regular fa-heart"></i></button>
                </div>
              )

          }
        </div>
      </div>
      {/* <button>Next</button>
      <button>Prew</button> */}
    </>
  )
}
