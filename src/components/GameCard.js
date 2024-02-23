import { useNavigate } from 'react-router-dom'


const GameCard = ({ id, title, storePrice, currentPrice, discount, imageUrl }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/store/${id}`) // Navigate to game's store page
  }

  return (
    <div className="game-card" onClick={ handleClick }>
      <img src={imageUrl} alt={title} className="game-image" />
      <div className="game-info">
        <div className="game-title">{title}</div>
        { discount === 0 &&
        <div className="game-pricing">
          <span className="current-price">{currentPrice}</span>
        </div>
        }
        { discount !== 0 &&
        <div className="game-pricing sale">
          <span className="discount">-{(discount*100).toFixed(0)}%</span>
          <span className="prices">
            <span className="store-price">{storePrice}</span>
            <span className="current-price">{currentPrice}</span>
          </span>
        </div>
        }
      </div>
    </div>
  );
}
 
export default GameCard;