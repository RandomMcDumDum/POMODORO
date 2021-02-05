import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <h1>{this.props.mode}</h1>
        );
    }
}

export default Header;