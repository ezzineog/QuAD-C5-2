import React from "react";
import PublicProfile from "./PublicProfile.js";
import EditProfile from "./EditProfile.js";
import Edit from "./Edit.js";
import axios from 'axios';

class FreelancerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      freelancer : this.props.freelancer,
      profileType: 1 };
    this.handelEditProfil = this.handelEditProfil.bind(this);
    this.handelPublicProfile = this.handelPublicProfile.bind(this);
  }

  componentDidMount(props){
    console.log(this.props.freelancer)
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Sould FreelancerProfile update?')
  //   return true;
  // }
  
  // componentDidUpdate(previousProps, previousState) {
  //   console.log('FreelancerProfile did update')
  
  // }
  handelEditProfil() {
    if (this.state.profileType === 1) {
    
      this.setState({ profileType: 2 });
    }
  }
  handelPublicProfile(body){
    if (this.state.profileType === 2) {
      this.setState({ profileType: 2 })
      
      
    }
  }

  render() {
    let compo;
    let edit;
    if (this.state.profileType === 1) {
      compo = <PublicProfile freelancer = {this.state.freelancer}/>;
    }
    if (this.state.profileType === 2){
      compo = <EditProfile handelPofile={this.handelPublicProfile} />;
    }
    if (this.state.profileType === 1) {
      edit = <Edit handelEdit={this.handelEditProfil} />;
    }
    return (
      <>
      {compo}
      {edit}
      </>
      ) 
  }
}

export default FreelancerProfile;
