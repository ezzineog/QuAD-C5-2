import React, { Component } from 'react';
import Filter from './Filter';
import Feeds from './Feeds'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

            user : {}, //we get it from the login action
            userDescription : {}, //we get it from the login action
            jobs : [{name: 'Ahmed Corp'}, {name:'numbers corp'}, {name : 'jdey corp'}], // get request to the jobOffers table
            applications : [] // get request to the join table

        }
    }
    render(props) {
        return (
            <div>
                <Filter/>
                <Feeds jobs={this.state.jobs}/>
            </div>
        )
    }
}
