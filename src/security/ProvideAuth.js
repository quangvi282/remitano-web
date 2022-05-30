import React, {useState} from 'react';
import axios from "axios";
import { AppContext } from '../context/AppContext';
import useFullPageLoader from '../hook/useFullPageLoader';
import { API_BASE_URL } from "../constants/constants";
import { logOut, saveLoginInfo } from './auth';

function useProvideAuth() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const signIn = (data) => {
        setToken(data.token);
        setTimeout(data,1000);
    };

    const signOut = cb => {
        logOut()
        setToken(null);
        setTimeout(cb, 1000); 
    };

    return {
        token,
        signIn,
        signOut,
        loader,
        showLoader,
        hideLoader,
    };
}

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <AppContext.Provider value={auth}>
        {children}
        {auth.loader}
        </AppContext.Provider>
    );
}

export default ProvideAuth
