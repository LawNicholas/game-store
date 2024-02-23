// Components
import GameCard from "./GameCard";

const GameCardList = ({ games }) => {
  return (
    <div className="game-cards-container">
      {games.map(game => (
          <GameCard
            key={game["id"]}
            id={game["id"]}
            title={game["title"]}
            storePrice={game["store-price"]}
            currentPrice={game["current-price"]}
            discount={game["discount"]}
            imageUrl={game["card-image-url"]}
          />
        ))}
    </div>
  );
}
 
export default GameCardList;