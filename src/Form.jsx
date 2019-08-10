import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formCompleted: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    messageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    displayThankYou = () => {
        this.setState({
            formCompleted: true
        })
    };

    render() {
        if (this.state.formCompleted === true) {
            return (
                <div>
                    <p>Thank you <span style={{fontWeight: 'bold'}}>{this.state.name}</span> for reaching out to us</p>
                </div>
            )
        }

        return (
            <div>
                <form onSubmit={this.displayThankYou}>
                    <p>
                        <label htmlFor="email">Name:</label> <br />
                        <input onChange={this.handleChange} id="name" type="text" value={this.state.name} name="name" />
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label> <br />
                        <input onChange={this.handleChange} id="email" type="text" value={this.state.email} name="email" />
                    </p>

                    {this.state.name !== '' ? <p>Hey {this.state.name} your message is important to us</p> : null}

                    <p>
                        <label htmlFor="message">Message:</label> <br />
                        <textarea onChange={this.messageChange} id="message" name="message" value={this.state.message}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Send" />
                    </p>
                </form>
            </div>
        )
    }

}

export default Form;