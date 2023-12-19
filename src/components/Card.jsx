/* eslint-disable react/prop-types */


function Card(props) {
  return (
    <div className="card-item">
      <img src={props.image} alt="image" className="card-image" />
      <div className="card-item-text">
        <h2>{props.num}</h2>
        <a className="card-item-anchor">{props.anchor}</a>
        <p>{props.text}</p>
      </div>

    </div>
  )
}

export default Card