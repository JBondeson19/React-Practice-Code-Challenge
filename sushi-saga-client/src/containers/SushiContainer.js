import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {


  
  return (
    <Fragment>
      <div className="belt">
          {props.allSushi.map(sushi => <Sushi sushi={sushi} buySushi={props.buySushi} eatenSushi={props.eatenSushi} />
          )}
        <MoreButton sushiButton={props.sushiButton}/>
      </div>
    </Fragment>
  );
};

export default SushiContainer;
