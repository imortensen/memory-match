import React from 'react'
import ActivePlayer from './ActivePlayer'

type Props =
  {
    activePlayer?: number, 
    p1Matches: any,
    p2Matches: any
  }

const Players = ({activePlayer, p1Matches, p2Matches}: Props):any => {

  const color1 = activePlayer === ActivePlayer.PLAYER1 ? 'blue' : 'black'
  const color2 = activePlayer === ActivePlayer.PLAYER2 ? 'blue' : 'black'
  
  return (
    <div className="players">
      <div className="player">
        <h3 style={{color: color1}}>Player 1</h3>
        Matches: {p1Matches}
      </div>
      <div className="player">
        <h3 style={{color: color2}}>Player 2</h3>
        Matches: {p2Matches}
      </div>
    </div>
  )
}

export default Players