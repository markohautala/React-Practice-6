import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "This is a prop from the constructor",
            buttonText: "Click me"

        };
    }

    handleClick() {
        console.log("button is clicked!")
    }

    render() {
        return (
            <div>
                <h1> {this.state.introduction} {this.props.greeting} </h1>
                <button onClick={() => this.handleClick()}> {this.state.buttonText} </button>
            </div>
        )
    }
}

export default StatefulGreeting;