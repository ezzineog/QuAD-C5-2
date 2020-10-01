import React from "react";
import PublicProfile from "./PublicProfile.js";
import EditProfile from "./EditProfile.js";
import Edit from "./Edit.js";
import axios from 'axios';

class FreelancerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileType: 1 };
    this.handelEditProfil = this.handelEditProfil.bind(this);
    this.handelPublicProfile = this.handelPublicProfile.bind(this);
  }

  handelEditProfil() {
    if (this.state.profileType === 1) {
    
      this.setState({ profileType: 2 });
    }
  }
  handelPublicProfile(body){
    if (this.state.profileType === 2) {
      axios.post('http://127.0.0.1:3008/signup', body)
      .then(response => console.log('[profile updated ==>]',response.data))
      .then(()=> this.setState({ profileType: 2 }))
      .catch(error  => console.log(error));
      
    }
  }

  render() {
    let compo;
    let edit;
    if (this.state.profileType === 1) {
      compo = <PublicProfile/>;
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
