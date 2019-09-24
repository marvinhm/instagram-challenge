import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label>
                        Name
                        <input className="name" type="text" name="name" />
                    </label>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;