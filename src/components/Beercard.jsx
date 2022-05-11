import React from 'react'
import Button from './Button'

function Beercard({title, sub, text, index}) {
  return (
    <div className='card'>
        <div className="number"><p>{index}</p></div>
        <div className="text">
            <h2>{title}</h2>
            <div className="subtext">
                <h3>{sub}</h3>
                <h4>{text}</h4>
            </div>
        </div>
        <Button/>
    </div>
  )
}

export default Beercard