/* eslint-disable react/prop-types */


function Card(props) {
  return (
    <div className="card-item">
      <img src={props.image} alt="image" className="card-image" />
      <div className="card-item-text">
        <h2>{props.num}</h2>
        <h3>{props.anchor}</h3>
        <p>{props.text}</p>
      </div>

    </div>
  )
}

export default Card