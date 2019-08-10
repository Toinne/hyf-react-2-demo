import React, { Component } from "react";
import Desk from "./Desk.jsx";
import Lamp from "./Lamp.jsx";
import Form from "./Form.jsx";

class App extends Component {

    render() {
        return (
            <Desk>
                <h1>State and props</h1>

                <Lamp />
                <Lamp color={'blue'} />
                <Lamp color={'pink'} />
                <Lamp color={'black'} />


                <h1>Forms</h1>

                <Form />
            </Desk>
        )
    }

}

export default App;