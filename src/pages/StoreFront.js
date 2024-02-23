import { useEffect, useState } from "react"

// Components
import GameCardList from "../components/GameCardList"

// files
import data from '../data/db.json'

const StoreFront = () => {

  const [games, setGames] = useState(null)

  const getGames = () => {
    setGames(data.games)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="page-content">
      <h1 className="title">Store</h1>
      { games && <GameCardList games={games}/> }
    </div>
  )
}

export default StoreFront