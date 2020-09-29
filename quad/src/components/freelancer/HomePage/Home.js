import React, { Component } from 'react';
import Filter from './Filter';
import Feeds from './Feeds'

export default class Home extends Component {
    
    render(props) {
        return (
            <div>
                <Filter/>
                <Feeds jobs={this.props.jobs}/>
            </div>
        )
    }
}
