import React, { Component } from "react";
import UserService from '../services/UserService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: null,
            data: null
        }
    }
    handleEmailChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        this.setState({ email: value });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { errors, data } = await UserService.login(this.state.email);
            this.setState({
                errors: errors,
                data: data
            });
            // const url = data.authUri;
            //if (data.authUri) window.location.href = url; //Temporary
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const { errors, data } = this.state;
        return (
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} minLength={5} maxLength={100} required />
                </div>
                <div><button type="submit" className="btn btn-primary m-2" onClick={this.handleSubmit} >Validate</button></div>
                <div className="error">
                    {errors}
                    {data && data.authUri}
                </div>
            </form >
        )
    }
}

export default Home;