import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "This is a prop from the constructor",
            buttonText: "Click me"

        };
    }

    render() {
        return (
            <div>
                <h1> {this.state.introduction} {this.props.greeting} </h1>
                <button> {this.state.buttonText} </button>
            </div>
        )
    }
}

export default StatefulGreeting;