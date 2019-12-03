import React, {Component} from 'react';
import Row from "./Row";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: this.createBoard(props),
            isLose: false,
            isWin: false
        };
        this.openedCell = 0;
    }

    createBoard(props) {
        let board = [];

        for (let i = 0; i < props.rows; i++) {
            board.push([]);

            for (let j = 0; j < props.cols; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    count: 0,
                    open: false,
                    mines: false,
                });
            }
        }

        for (let i = 0; i < props.mines; i++) {
            const row = Math.floor(Math.random() * props.rows);
            const col = Math.floor(Math.random() * props.cols);

            const cell = board[row][col];
            if (cell.mines) {
                i--;
            } else {
                cell.mines = true;
            }
        }
        return board;
    }

    openCell(cell) {
        if (this.state.isLose || this.state.isWin) {
            return;
        }
        const rows = this.state.rows;

        let minesCount = this.findMines(cell);

        const currentCell = rows[cell.y][cell.x];

        if(!currentCell.open) {
            if (currentCell.mines) {
                currentCell.open = true;
                this.openedCell = 0;
                this.setState({
                    isLose: true,
                });
            } else {
                currentCell.open = true;
                currentCell.count = minesCount;

                this.openedCell++;

                if (this.openedCell === (this.props.rows * this.props.cols - this.props.mines)) {
                    this.openedCell = 0;
                    this.setState({
                        isWin: true,
                    });
                }

                this.setState(rows);
            }
        }
    };

    findMines(cell) {
        let minesCount = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if(cell.y + i >= 0 && cell.x + j >= 0) {
                    if (cell.y + i < this.state.rows.length && cell.x + j < this.state.rows[0].length) {
                        if (this.state.rows[cell.y + i][cell.x + j].mines && !(i === 0 && j === 0)) {
                            minesCount++;
                        }
                    }
                }
            }
        }

        return minesCount;
    }

    resetBoard() {
        let newRows = this.createBoard(this.props);
        this.setState({
            rows: newRows,
            isLose: false,
            isWin: false,
        });
    }

    render() {
        const rows = this.state.rows.map((row, index) => {
            return (
                <Row cells={row} key={index} open={this.openCell.bind(this)}/>
            );
        });
        return (
            <div className="minesweeper">
                <h2>Minesweeper</h2>
                <button type="button" className="minesweeper__reset" onClick={this.resetBoard.bind(this)}>Reset</button>
                <p className="minesweeper__lose" hidden={!this.state.isLose}>You lose</p>
                <p className="minesweeper__win" hidden={!this.state.isWin}>You win</p>
                <div className="minesweeper__board">{rows}</div>
            </div>
        );
    }
}

export default Board;
