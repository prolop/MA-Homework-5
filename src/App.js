import React from 'react';
import Board from "./Board";

class App extends React.Component {
  state = {
    rows: 10,
    cols: 10,
    mines: 10
  };


  render() {
    return (
        <Board
            rows={this.state.rows}
            cols={this.state.cols}
            mines={this.state.mines}
        />
    );
  }
}

export default App;
