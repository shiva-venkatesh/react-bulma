import React from 'react';
import '../../tile.css';

const Tile = ({text, subText}) => {
  return(
    <div className="tile">
      <h3>
        {text}
      </h3>
      <p>
        {subText}
      </p>
    </div>
  )
}

export default Tile;
