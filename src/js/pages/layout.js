import React from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: '_booa'};
    }

    changeTitle(title) {
        this.setState({title: title});
    }

    render() {
        return (
            <div>
                <Header
                    changeTitle={this.changeTitle.bind(this)}
                    title={this.state.title}
                />
                <Footer />
            </div>
        );
    }
}