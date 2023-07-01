import "./Items.css";

export default function Items(props) {
    return (
        <div className="swiper_slide_item">
            <img src={props.img}/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button type="button">$20 | Oreder Now</button>
        </div>
    )
}
