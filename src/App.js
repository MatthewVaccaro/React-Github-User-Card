import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./Card.js";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      me: [],
      followers: []
    };
  }

  componentDidMount() {
    Axios.get(`https://api.github.com/users/matthewvaccaro`)
      .then(res => {
        this.setState({
          me: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(`https://api.github.com/users/matthewvaccaro/followers`)
      .then(res => {
        res.data.map(user => {
          Axios.get(`https://api.github.com/users/${user.login}`).then(res => {
            this.setState({ followers: [...this.state.followers, res.data] });
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log(this.state.followers);
  }

  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
        <Card data={this.state.me} />

        {this.state.followers
          ? this.state.followers.map(cv => {
              return <Card data={cv} key={cv.id} />;
            })
          : ""}
      </div>
    );
  }
}

export default App;
