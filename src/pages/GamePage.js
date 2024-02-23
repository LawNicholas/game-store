import { useParams } from "react-router-dom"

const GamePage = () => {
  const { id } = useParams()

  return (
    <div className="page-content">
      <h2>{ id }</h2>
    </div>
  );
}

export default GamePage