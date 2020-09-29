import React, { Component } from 'react'
import Home from './HomePage/Home';

export default class FreelancerSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {},
            jobs : [{name: 'Ahmed Corp'}, {name:'numbers corp'}, {name : 'jdey corp'}],
            applications : []
        }
    }

    componentDidMount(){
        // axios.get('/freelancer')
        // .then(res => this.setState({
        // //    bring all the jobs and the jobs for which the user applied
        // }))
    }
    render() {
        return (
            <div>
                <Home 
                jobs={this.state.jobs}
                applications={this.state.applications}
                />
                
            </div>
        )
    }
}
