import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

class App extends Component {
  //! Initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    idToDelete: null,
    intervalIsSet: false,
    loading: true,
    idToUpdate: null,
    messageToUpdate: null
  };

  //! When a component mounts, first thing is to fetch all the existing data
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
    this.getDataFromDB();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDB, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  //! Always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  //! Get method to use our backend API and fetch data from DB
  getDataFromDB = () => {
    fetch("http://localhost:3001/getData")
      .then(data => data.json())
      .then(res => {
        this.setState({ data: res.data });
      })
      //* ALWAYS CATCH ERROR / EXCEPTIONS
      .catch(err => this.setState({ err }));
  };

  //! post method that uses our API to create new data
  putDataToDB = message => {
    let currentId = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentId.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/createData", {
      id: idToBeAdded,
      message: message
    });
  };

  //! Delete method to remove existing DB info
  deleteFromDB = idToDelete => {
    // Need to Delete the object according to ID
    let objIdToDelete = null;

    this.state.data.forEach(object => {
      if ((object.id = idToDelete)) {
        objIdToDelete = object.id;
      }
      console.log(objIdToDelete);
    });

    // call /deleteData to delete the object using axios
    axios.delete("http://localhost:3001/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  //! Update method to update or overwrite existing DB info
  updateDB = (idToUpdate, messageToUpdate) => {
    let objIdToUpdate = null;
    this.state.data.forEach(data => {
      if ((data.id = idToUpdate)) {
        objIdToUpdate = data.id;
        console.log(idToUpdate, messageToUpdate);
      }
    });

    axios.post("http://localhost:3001/updateData", {
      id: objIdToUpdate,
      message: messageToUpdate
    });
  };

  render() {
    const { data } = this.state;
    let content = this.state.loading ? (
      <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
    ) : (
      <ul>
        {/* for loop = condition ? True: False */}
        {data.length <= 0
          ? "No Database Entries yet"
          : data.map(data => (
              <div
                style={{
                  height: "100px",
                  width: "350px",
                  border: "1px solid black"
                }}
              >
                <li key={data._id}>
                  <span>MongoID: </span>
                  {data._id}
                  <br />
                  <span>ID: </span>
                  {data.id}
                  <br />
                  <span>Message: </span>
                  {data.message}
                  <br />
                  {/* <span>Created At: </span>
                  {data.createdAt}
                  <br />
                  <span>Updated At: </span>
                  {data.updatedAt}
                  <br /> */}
                </li>
                <br />
              </div>
            ))}
      </ul>
    );
    /*
    const data =this.state.data
    */
    return (
      <div style={{ align: "center" }}>
        {content}
        <div>
          <input
            type="text"
            placeholder="Add something in DB"
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Put ID to delete an item"
            onChange={e => {
              this.setState({ idToDelete: e.target.value });
            }}
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Put ID to update an item"
            onChange={e => this.setState({ idToUpdate: e.target.value })}
          />
          <input
            type="text"
            placeholder="Put new message here"
            onChange={e => this.setState({ messageToUpdate: e.target.value })}
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.messageToUpdate)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default App;
