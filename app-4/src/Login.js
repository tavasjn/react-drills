import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }

    }

    handleUsernameChange(value){
        this.setState({
            username: value
        })
    }

    handlePasswordChange(value){
        this.setState({
            password: value
        })
    }

    handleLogin = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input 
                    onChange={(e) => this.handleUsernameChange(e.target.value)}
                    type='text'/>
                <input 
                    onChange={(e) => this.handlePasswordChange(e.target.value)}
                    type='text'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }


}

export default Login;