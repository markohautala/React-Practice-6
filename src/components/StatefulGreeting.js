import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "This is a prop from the constructor",
            buttonText: "Click me",
            buttonCount: 0,
            isClicked: false // Initialize isClicked in the state
        };
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => ({
            introduction: prevState.isClicked ? "This is a prop from the constructor" : "Goodbye!",
            buttonText: prevState.isClicked ? "Click me" : "You clicked me!",
            isClicked: !prevState.isClicked, // toggles the isClicked state
            buttonCount: prevState.buttonCount + 1 // increments the buttonCount state
        }), () => {
            console.log("new button-state is: ", this.state.buttonText);
        });
        console.log("button is clicked!");
    }

    render() {
        return (
            <div>
                <h1> {this.state.introduction} {this.props.greeting} </h1>
                <button onClick={this.handleClick}> {this.state.buttonText} </button>
                <br />
                <button> {this.state.buttonCount} </button>
            </div>
        )
    }
}

export default StatefulGreeting;
