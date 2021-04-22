import React, { Component } from 'react';
import { Row } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

class Counter extends Component {
    state = {
        counters: [
            { icon: "bookmark", title: "Projects", start: 10, end: 2581 },
            { icon: "user-plus", title: "No. of Clients", start: 2, end: 800 },
            { icon: "shopping-cart", title: "Cups of coffee", start: 608, end: 128 },
            { icon: "award", title: "Awards", start: 6, end: 47 },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <Row id="counter">
                    <CounterBox counters={this.state.counters} />
                </Row>
            </React.Fragment>
        );
    }
}

export default Counter;