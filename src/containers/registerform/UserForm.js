import React, { Component } from "react";
import classes from "./UserForm.module.css";
import userAPI from "../../API/user";

class UserForm extends Component {
  state = {
    user: {
      username: "",
      password: "",
      email: ""
    }
  };

  registerHandler = async e => {
    e.preventDefault();
    const res = await userAPI.register(this.state);
    alert("you are registers");
  };

  render() {
    return (
      <form className={classes.UserForm} onSubmit={this.registerHandler}>
        <label>
          username{" "}
          <input
            onChange={event => this.setState({ username: event.target.value })}
            type="text"
            name="username"
            required
          />
        </label>
        <label>
          password{" "}
          <input
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            name="password"
            required
          />
        </label>
        <label>
          email{" "}
          <input
            onChange={event => this.setState({ email: event.target.value })}
            type="email"
            name="email"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default UserForm;
