import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.sushiButton()}>
            More sushi!
          </button>
}

export default MoreButton