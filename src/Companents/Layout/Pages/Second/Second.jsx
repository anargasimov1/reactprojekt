import "./Second.css";
import { useEffect, useState } from "react";

export default function Second() {

  const url = "https://hilarious-rectangular-principle.glitch.me/swiper";

  const [praducts, setPraducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [heart, setHearts] = useState([]);
  const [count, setConunt] = useState(1);
  const perPage = 4;
  const Maxpage = Math.ceil(praducts.length / perPage);

  const filtered = praducts.slice(
    (count - 1) * perPage, count * perPage
  ).filter(i => i.title.toLowerCase().includes(filter.toLocaleLowerCase()))

  function setWishlist(title, name, id, about) {
    let hearts = { title, name, about, id };
    localStorage.setItem(`${title}`, JSON.stringify(hearts));
    setHearts(JSON.parse(localStorage.getItem(`${title}`)))
    localStorage.setItem("wishlist",JSON.stringify(heart))
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
              <div className="swiper_slide_item" key={i.id}>
                <div className="img_item"> <img src={i.img} /></div>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
                <button id="btn3" className="card_btn" type="button">$20 | Oreder Now</button>
                <button
                  onClick={() => setWishlist(i.title, i.description, i.id, i.img)}
                  type="button"><i className="fa-regular fa-heart"></i></button>
              </div>
            )
          }
        </div>
      </div>
      <div className="buttons">
        <button disabled={count === 1} onClick={() => { setConunt(count - 1) }} type="button"> <i className="fa-solid fa-angles-left"></i>Preview</button>
        <button disabled={count === Maxpage} onClick={() => { setConunt(count + 1) }} type="button">Next<i className="fa-solid fa-angles-right"></i></button>
      </div>
    </>
  )
}
