import React, { Component } from 'react';
import Login from './login';


class User extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        fetch('api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log("Customers added...", customers)))
    }

    render() {
        return (
            <div>
                <h1>Welcome to Instagram</h1>
                <Login />
                <ul>
                    {this.state.customers.map(customer => (
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default User;