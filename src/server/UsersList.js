import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3001/users')
      .then(res => {
        this.setState({ users: res.data});
      })
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li key={user.id}>{user.email}</li>)}
      </ul>
    )
  }
}