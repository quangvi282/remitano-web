import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AuthRoute = ({ component: Component, redirectTo, ...rest}) => {
    // const authenticated = isAuthenticated();
    const authenticated = useContext(AppContext).token !== null;
    return (
        <Route
            {...rest}
            render={(props) => (
                authenticated ? (
                    <Component type={rest.type} key={rest.key} {...props} />
                ) : (
                    <Redirect to={{
                        pathname: redirectTo,
                        state: { from: props.location }
                    }}
                    />
                )
            )}
        />
    )
}

AuthRoute.propTypes = {
    authenticated: PropTypes.bool,
    component: PropTypes.func.isRequired,
}

AuthRoute.defaultProps = {
    authenticated: false,
    redirectTo: "/login"
}

export default AuthRoute