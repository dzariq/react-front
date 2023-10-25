import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.api_url = 'http://localhost:3200';
    }

    //init
    componentDidMount() {
        this.refreshUsers()
    }


    async refreshUsers() {
        fetch(this.api_url+'/users')
                .then((res) => res.json())
                .then((data) => this.setState({users: data}));
    }

    async addClick() {
        var userName = document.getElementById('userName').value;
        const data = new FormData();

        data.append("name", userName);

        fetch(this.api_url+'/add', {
            method: 'POST',
            body: data
        })
                .then((res) => res.json())
                .then((res) => {
                    alert(res);
                    this.refreshUsers()
                });
    }

    async deleteClick(id) {
        fetch(this.api_url+'/delete?user_id=' + id, {
            method: 'DELETE'
        })
                .then((res) => res.json())
                .then((res) => {
                    alert(res);
                    this.refreshUsers()
                });
    }

    render() {
        const{users} = this.state;
        return (
                <div className="App">
                    <h2>BADA APP</h2>
                    <input id="userName" />
                    <button onClick={() => this.addClick()} >Add User</button>
                    {users.map(user =>
                                <p>
                                    <b>{user.name}</b>
                                    <button onClick={() => this.deleteClick(user.user_id)} >Delete User</button>
                                </p>
                        )}
                </div>
                );
    }

}

export default App;
