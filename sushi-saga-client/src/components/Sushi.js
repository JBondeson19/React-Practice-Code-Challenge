import React, { Fragment } from 'react'

const Sushi = (props) => {
 

  return (
    <div className="sushi">
      <div className="plate">
        { 
          props.eatenSushi.find((eaten) => eaten.id === props.sushi.id) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" onClick={() => props.buySushi(props.sushi)} />
          
        }
      </div>
      <h4 className="sushi-details">
      {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

//onClick for plate will remove Sushi from plate, talk to Table and App
//pass function to sushi, up to App which will tell Table about the state of Sushi. 

export default Sushi
