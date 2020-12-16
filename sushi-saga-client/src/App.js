import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    tableMoney: 100,
    tablePlates: [],
    fourPlates: []
  }
  
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiArray => this.setState({
      allSushi: sushiArray,
      fourPlates: sushiArray.splice(0, 4)
    }))
  }

  

  sushiSlice = () => {
    this.setState({
      fourPlates: this.state.allSushi.splice(0,4)
    })
  }

  buySushi = (sushi) => {
    if(this.state.tableMoney >= sushi.price){
      // && this.state.tablePlates.find((eaten) => eaten.id === sushi.id)
          this.setState({
          tablePlates: [...this.state.tablePlates, sushi],
          tableMoney: this.state.tableMoney - sushi.price
        })
      }
    } 


  
  render() {

    return (
      <div className="app">
        <SushiContainer allSushi={this.state.fourPlates} buySushi={this.buySushi} eatenSushi={this.state.tablePlates} sushiButton={this.sushiSlice}/>
        <Table  money={this.state.tableMoney} plates={this.state.tablePlates} />
      </div>
    );
  }
}

//need app to "buy Sushi" and tell Table condiiton of sushi that is purchased/unavailable

export default App;