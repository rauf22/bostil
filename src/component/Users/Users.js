import React, { useState, useEffect, Fragment } from 'react';
import User from './User';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentPage: 1,
      displayData: [],
      page: [],
      grid: [],
    };
  }

  componentDidMount() {
    const url =
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users.users });
        console.log(this.state.users);
      });
  }

  render() {
    const grid = this.state.users.map((item) => {
      return <User key={item.id} attributes={item} />;
    });
    return <>{grid}</>;
  }
}

export default Users;
