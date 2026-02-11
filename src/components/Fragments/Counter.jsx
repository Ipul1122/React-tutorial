import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };
        console.log("Constructor dijalankan");
    }

    // lifecycle method
    componentDidMount() {
        this.setState({count: 5});
        console.log("componentDidMount dijalankan");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate dijalankan");
        if (this.state.count === 10) {
            this.setState({count: 5});
        }
    }

    render() {
        return (
            <div className="flex">
                <h1 className="text-2xl font-bold">{this.state.count}</h1>
                <button className="bg-blue-600 text-white p-3"
                    onClick = {() => this.setState({count: this.state.count + 1})}
                >+</button>
                {console.log("Render dijalankan")}
            </div>
        )
    }
}

export default Counter