import React, { Component, Fragment } from "react";
import Table from "react-bootstrap/Table";


class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
      // data: [],
      // userId: 0,
      // message: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        });
      });
  }

  // getDataFromDB = () => {
  //   fetch("http://localhost:3001/getData")
  //     .then(data => data.json())
  //     .then(res => {
  //       this.setState({ data: res.data });
  //     })
  //     //* ALWAYS CATCH ERROR / EXCEPTIONS
  //     .catch(err => this.setState({ err }));
  // };

  getAddress = user => {
    let address =
      user.address.street +
      "," +
      user.address.zipcode +
      "," +
      user.address.city;
    return address;
  };

  render() {
    return (
      <Fragment>
        <Table responsive striped hover variant="dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Address</th>
          </tr>
          {this.state.users.map(user => {
            return (
              <tr key={user.id}>
              <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{this.getAddress(user)}</td>
              </tr>
            );
          })}
        </Table>
      </Fragment>
    );
  }
}

export default Userlist;
