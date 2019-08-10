import React, { Component } from "react";

const Bulb = ({ on }) => {
    return (
        <div style={{ height: '500px', width: '500px', borderRadius: '100%', backgroundColor: (on === true ? 'yellow' : 'black') }} />
    )
};

class Lamp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            on: false
        }
    }

    onClick = () => {
        this.setState({
            on: !this.state.on
        })
    };

    render() {
        return (
            <section style={{ backgroundColor: (this.props.color || 'red'), width: '500px' }}>
                <Bulb on={this.state.on} />
                <div style={{margin: '0 auto', height: '200px', width: '200px'}}>
                    <button onClick={this.onClick} style={{height: '100%', width: '100%'}}>ON/OFF</button>
                </div>
            </section>
        );
    }
}

export default Lamp;