import React, { Component } from "react";
import Axios from "axios";
import "./Users.css"

import UserItem from "./UserItem";
/* 
    1. fetch api data as soon as component appears
    2. sort the fetched data
    3. show the data to the user 
*/
class Users extends Component {
  state = {
    users: ""
  };

  // 1. Introduce life cycle method to fetch api data as soon as component mounts.
  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=3")
      .then(response => this.setState({ users: response.data.results }))
      .catch(error => console.error(error));
  }

  // 2. Introduce a function that helps sort data
  renderUsers() {
    if (this.state.users.length > 0) {
      return this.state.users.map((user, index) => (
        <UserItem
          key={index}
          image={user.picture.large}
          title={user.name.title}
          first={user.name.first}
          last={user.name.last}
        />
      ));
    }
  }

  render() {
    // 3. Show data to user
    return <section className="card_container">{this.renderUsers()}</section>;
  }
}

export default Users;
