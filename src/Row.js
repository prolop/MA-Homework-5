import React, {Component} from 'react';
import Cell from "./Cell";

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cells = this.props.cells.map((data, index) => {
            return <Cell data={data} key={index} open={this.props.open}/>
        });
        return (
            <div className="minesweeper__row">
                {cells}
            </div>
        );
    }
}

export default Row;
