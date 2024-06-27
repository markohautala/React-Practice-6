import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "This is a prop from the constructor",
            buttonText: "Click me"

        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            introduction: prevState.isClicked ? "This is a prop from the constructor" : "Goodbye!",
            buttonText: prevState.isClicked ? "Click me" : "You clicked me!",
            isClicked: !prevState.isClicked
        }));
        console.log("button is clicked!");
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