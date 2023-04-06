// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="card-image-container">
        <img src={imgUrl} className="card-image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
