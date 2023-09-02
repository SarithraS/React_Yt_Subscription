import React, { Component } from 'react';
import bellA from './BellA.jpeg';
import bellB from './BellB.jpg';

export class NewComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'subscribe to my channel',
            sub: 'subscribe',
            imageURL: bellB,
            clickCount: 0,
            showImage: true,
            customMessage: '',
        };
    }

    styles = {
        fontStyle: 'italic',
        color: 'purple',
    };

    buttonChange = () => {
        this.setState((prevState) => ({
            message: 'hit the bell icon',
            sub: 'subscribed!',
            clickCount: prevState.clickCount + 1,
        }));
    };

    imageChange = () => {
        this.setState({
            imageURL: bellA,
            message: 'thank you',
        });
    };

    toggleImage = () => {
        this.setState((prevState) => ({
            showImage: !prevState.showImage,
        }));
    };

    resetComponent = () => {
        this.setState({
            message: 'subscribe to my channel',
            sub: 'subscribe',
            imageURL: bellB,
            clickCount: 0,
            showImage: true,
            customMessage: '',
        });
    };

    handleCustomMessageChange = (event) => {
        this.setState({
            customMessage: event.target.value,
        });
    };

    render() {
        return (
            <div className="App" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <h2 style={{ ...this.styles, fontSize: '24px', marginBottom: '10px' }}>
                    {this.state.customMessage || this.state.message}
                </h2>
                <p>Default Message: {this.state.message}</p>
                <p>Custom Message: {this.state.customMessage}</p>
                <input
                    type="text"
                    placeholder="Enter custom message"
                    value={this.state.customMessage}
                    onChange={this.handleCustomMessageChange}
                    style={{ marginBottom: '10px', padding: '5px', fontSize: '14px' }}
                />
                <button
                    onClick={this.buttonChange}
                    style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}
                >
                    {this.state.sub}
                </button>
                <button
                    onClick={this.toggleImage}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}
                >
                    Toggle Image
                </button>
                <button
                    onClick={this.resetComponent}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                >
                    Reset
                </button>
                <p>Button Clicks: {this.state.clickCount}</p>
                {this.state.showImage && (
                    <img
                        style={{
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            opacity: this.state.showImage ? 1 : 0.7,
                            transition: 'opacity 0.3s',
                        }}
                        src={this.state.imageURL}
                        onClick={this.imageChange}
                        alt=" "
                    />
                )}
            </div>
        );
    }
}

export default NewComp;
