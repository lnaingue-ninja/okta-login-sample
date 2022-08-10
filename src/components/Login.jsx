import React, { Component } from "react";
import { useSearchParams } from 'react-router-dom';

import UserService from '../services/UserService';

const getOathCode = (Component) => {
    function ComponentWithRouter(props) {
        const [searchParams] = useSearchParams();

        return <Component {...props} params={searchParams} />
    }
    return ComponentWithRouter

}

class Login extends Component {
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
        } catch (e) {
            console.log(e);
        }
    }
    async componentDidMount() {
        const code = this.props.params.get('code');
        console.log(localStorage.getItem('access_token'));
        if (code) {
            const res = await UserService.getToken(code); //Okta Auth has been authenticated
            console.log(res);
        } else await UserService.getProfile();
    }

    render() {
        return (
            <></>
        )
    }
}

export default getOathCode(Login);