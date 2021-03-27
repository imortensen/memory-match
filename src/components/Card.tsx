import React from 'react'
import ReactCardFlip from 'react-card-flip'

type Props =
  {
    cellWidth: number, 
    color: string, 
    onClick: any,
    isFlipped: boolean
  }

const Card = ({
  cellWidth, 
  color, 
  onClick,
  isFlipped
}:Props):any => {

  const background = isFlipped ? color : 'transparent'

  return (
    <div className="cell" style={{width: `${cellWidth}%`}}>
      <ReactCardFlip isFlipped={isFlipped}>
        <div
          className="card-cell"
          key="front"
          style={{backgroundColor: background}}
          onClick={onClick}
        >
        </div>
        <div
          className="card-cell"
          key="back"
          style={{backgroundColor: background}}
          onClick={onClick}
        >
        </div>
      </ReactCardFlip>
    </div>
  )     
}

export default Card