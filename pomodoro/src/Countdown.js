import React, { Component } from 'react';

function formatTime(milis) {
    const min = Math.floor(milis / 60000);
    const sec = Math.floor((milis % 60000) / 1000);

    return `${min}:${sec<10 ? '0' + sec  : sec}`
}

class Countdown extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <h1>{formatTime(this.props.time)}</h1>
        );
    }
}

export default Countdown;