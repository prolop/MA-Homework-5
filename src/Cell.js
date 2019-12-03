import React, {Component} from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    renderCell() {
        if (this.props.data.open) {
            if (this.props.data.mines) {
                return (
                    <div className="minesweeper__cell minesweeper__cell--open minesweeper__cell--mine" onClick={() => this.props.open(this.props.data)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.203 489.203"><path d="M365.001 20.303l-17.2 16.2c-2.3 2.2-2.4 5.9-.2 8.2 2.2 2.3 5.9 2.4 8.2.2l17.2-16.2c2.3-2.2 2.4-5.9.2-8.2-2.2-2.3-5.9-2.4-8.2-.2zM321.501 5.603l-.7 23.6c-.1 3.2 2.4 5.9 5.6 6s5.9-2.4 6-5.6l.7-23.6c.1-3.2-2.4-5.9-5.6-6-3.2-.1-5.9 2.4-6 5.6zM197.301 169.903v20.2c-61.5 19.9-106 77.7-106 145.8 0 84.7 68.6 153.3 153.3 153.3s153.3-68.6 153.3-153.3c0-68.4-44.8-126.4-106.7-146.1v-19.9c0-10.7-8.7-19.4-19.4-19.4h-55.1c-10.7 0-19.4 8.7-19.4 19.4zm5 84.9c-30.1 15.8-48.8 46.7-48.8 80.7 0 7.9-6.4 14.4-14.4 14.4-7.9 0-14.4-6.4-14.4-14.4 0-44.7 24.6-85.4 64.2-106.2 7-3.7 15.7-1 19.4 6 3.8 7.2 1 15.8-6 19.5zM304.701 43.403c2.3-2.2 2.4-5.9.2-8.2l-16.2-17.2c-2.2-2.3-5.9-2.4-8.2-.2-2.3 2.2-2.4 5.9-.2 8.2l16.2 17.2c2.2 2.2 5.9 2.4 8.2.2zM346.101 95.703l16.2 17.2c2.2 2.3 5.9 2.4 8.2.2 2.3-2.2 2.4-5.9.2-8.2l-16.2-17.2c-2.2-2.3-5.9-2.4-8.2-.2-2.3 2.2-2.4 5.9-.2 8.2zM355.901 66.303c-.1 3.2 2.4 5.9 5.6 6l23.6.7c3.2.1 5.9-2.4 6-5.6s-2.4-5.9-5.6-6l-23.6-.7c-3.3-.1-6 2.4-6 5.6zM236.501 136.103h19.7c7.7-31.9 34.8-56.3 68-60 4.9-.5 8.8-4.6 8.8-9.5 0-5.8-5.1-10.2-10.8-9.5-43 4.7-77.7 37.2-85.7 79zM318.701 101.403l-.7 23.6c-.1 3.2 2.4 5.9 5.6 6s5.9-2.4 6-5.6l.7-23.6c.1-3.2-2.4-5.9-5.6-6-3.3-.1-5.9 2.4-6 5.6z"/></svg>
                    </div>
                );
            } else if (this.props.data.count > 0) {
                return (
                    <div className="minesweeper__cell minesweeper__cell--open" onClick={() => this.props.open(this.props.data)}>
                        {this.props.data.count}
                    </div>
                );
            } else {
                return (
                    <div className="minesweeper__cell minesweeper__cell--open" onClick={() => this.props.open(this.props.data)} />
                );
            }
        } else {
            return (
                <div className="minesweeper__cell" onClick={() => this.props.open(this.props.data)} />
            );
        }
    }

    render() {
        return this.renderCell();
    }
}

export default Cell;
