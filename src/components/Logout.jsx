import React, { Component } from "react";
import { Navigate, useSearchParams } from 'react-router-dom';

import UserService from '../services/UserService';

const getOathCode = (Component) => {
    function ComponentWithRouter(props) {
        const [searchParams] = useSearchParams();

        return <Component {...props} params={searchParams} />
    }
    return ComponentWithRouter

}

class Logout extends Component {

    async componentDidMount() {
        localStorage.setItem('token', '');
    }

    render() {
        return (
            <React.Fragment>
                <Navigate to='/' />
            </React.Fragment>
        )
    }
}

export default getOathCode(Logout);