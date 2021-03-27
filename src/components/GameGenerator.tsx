import React, { useState } from 'react'
import GameSession from './GameSession'
import utils from '../utils'
import GameStatus from './GameStatus'
import ActivePlayer from './ActivePlayer'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const GameGenerator = (): any => {
  const [gameStatus, setGameStatus] = useState(GameStatus.NEW)
  const [pairs, setPairs] = useState(6)
  const [cellWidth, setCellWidth] = useState(100/3)
  const [cards, setCards] = useState(utils.createCards(pairs))
  const [gameId, setGameId] = useState(1)
  const [activePlayer, setActivePlayer] = useState<number>()

  const calcCellWidth = (value:number) => {
    console.log(value)
    const width = value === 6 ? 100/3 :
                  value === 12 ? 100/4 : 
                  100/5
    return width
  }

  const renewGame = () => {
    setGameStatus(GameStatus.NEW)
    setGameId(gameId+1)
    setPairs(pairs)
    setCellWidth(cellWidth)
    setCards(utils.createCards(pairs))
  }

  const onChange = (event:any) => {
    const value = Number(event.target.value)
    setPairs(value)
    setCellWidth(calcCellWidth(value))
    setCards(utils.createCards(value))
  }

  const startPlaying = () => {
    setGameStatus(GameStatus.PLAYING)
    setActivePlayer(ActivePlayer.PLAYER1)
  }

  const buttonAreaContent = () => {
    if (gameStatus === GameStatus.NEW) {
      return <Button variant="primary" onClick={startPlaying}>Start Game</Button>
    }
    if (gameStatus === GameStatus.GAME_OVER) {
      return <Button variant="primary" onClick={renewGame}>New Game</Button>
    }
  }

  return (
    <div className="container">
      <Form className="form">
        <Form.Label>
          Game Size:
          <Form.Control as="select" 
          id="gameSize" 
          name="gameSize" 
          onChange={onChange}
          disabled={gameStatus !== GameStatus.NEW}
          >
            <option value="6">Small</option>
            <option value="12">Medium</option>
            <option value="15">Large</option>
          </Form.Control>
        </Form.Label>
        <div className="button">{buttonAreaContent()}</div>
      </Form>

      <GameSession 
        key={gameId}
        cards={cards}
        cellWidth={cellWidth}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />

      </div>
  )
}

export default GameGenerator
