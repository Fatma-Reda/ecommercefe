import React, { Component } from 'react';
import classes from './UserForm.module.css';
import userAPI from '../../API/user';


class UserForm extends Component {
    state = {
        username: '',
        password: ''
    }

    loginHandler = async (e) => {
        e.preventDefault();
        const { username: { value: username }, password: { value: password } } = e.target.elements;
        console.log(username, password);
        const res = await userAPI.login({ username, password });
        alert('you are authenticated');
    }

    render() {
        return (
            <form className={classes.UserForm} onSubmit={this.loginHandler}>
                <input onChange={(event) => this.setState({ username: event.target.value }) } type="text" name="username" placeholder="Enter UserName"></input>
                <input onChange={(event) => this.setState({ password: event.target.value }) } type="password" name="password" placeholder="Enter Password"></input>
                <button type="submit" >
                    login
                </button>
            </form>
        );
    }
}


export default UserForm;