import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import SignInAdmin from './Component/SignIn/SignInAdmin.component';
import Sidebar from './Component/Sidebar-admin/sidebar.admin';
// import Home from './Component/Home/Home';
import { auth, createUserProfileDocument, firebase } from './firebase/firebase.utils';

class Admin extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  render(){
    return(
      <Sidebar/>
    )
}



}

export default Admin;
