import React, { useState } from 'react'
import Card from './Card'
import Players from './Players'
import ActivePlayer from './ActivePlayer'
import GameStatus from './GameStatus'

type Props =
  {
    cards: {id: number, color: string, isMatched: boolean}[], 
    cellWidth: number, 
    gameStatus: string, 
    setGameStatus: any,
    activePlayer?: number,
    setActivePlayer: any
  }

interface PickedCardProperties {id: number, color: string, isMatched: boolean}
interface PlayersProperties {player: number, cards: string[]}

const GameSession = ({cards, cellWidth, gameStatus, setGameStatus, activePlayer, setActivePlayer}: Props ):any => {
  const [pickedCards, setPickedCards] = useState<PickedCardProperties[]>([])
  const [players] = useState<PlayersProperties[]>([
    {player: 1, cards: []},
    {player: 2, cards: []}
  ])

  const p1Matches = () => players[0].cards.length
  const p2Matches = () => players[1].cards.length

  async function checkWinner() {
    setTimeout(() => {
      if(p1Matches() === p2Matches()) {
        alert ('Tie!')
        } else if(p1Matches() > p2Matches()) {
          alert ('Player 1 Wins!')
        } else {
          alert ('Player 2 Wins!')
        }
      }
      ,100)
  }

  const pickCard = (card:{id: number, color: string, isMatched: boolean}) => {
    if(gameStatus === GameStatus.PLAYING) {

      setPickedCards((pickedCards:{id: number, color: string, isMatched: boolean}[]) => {
        if(pickedCards.includes(card)) {
          return pickedCards
        } else {
          return pickedCards.concat(card)
        }
      })

      // Match Found
      if(pickedCards.length > 0 && pickedCards[0].color === card.color) {
        pickedCards[0].isMatched = true
        card.isMatched = true
        players[activePlayer!].cards.push(card.color)
        setPickedCards([])
      }

      // Not a match
      if(pickedCards.length > 0 && pickedCards[0].color !== card.color) {
        setGameStatus(GameStatus.NO_MATCH)
        const nextPlayer = activePlayer === ActivePlayer.PLAYER1 ? ActivePlayer.PLAYER2 : ActivePlayer.PLAYER1
        setTimeout(() => {
          setGameStatus(GameStatus.PLAYING)
          setActivePlayer(nextPlayer)
          setPickedCards([])
          }
          ,4000)
      }

      // Check winner
      if(p1Matches() + p2Matches() === cards.length / 2) {
        checkWinner()
        setGameStatus(GameStatus.GAME_OVER)
      }
    }
  }

  const cells : any = []
  cards.map( card => {
    return cells.push(
      <Card
        cellWidth={cellWidth}
        key={card.id}
        color={card.color}
        onClick={() => pickCard(card)}
        isFlipped={card.isMatched || pickedCards.includes(card)}
      />
    )
  })

  return (
    <div className="game">
      <div className="grid">{cells}</div>
        <Players
        activePlayer={activePlayer}
        p1Matches={p1Matches()}
        p2Matches={p2Matches()}
        />
    </div>
  )
}

export default GameSession