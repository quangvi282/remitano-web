import React, {useState} from 'react';
import axios from "axios";
import { AppContext } from '../context/AppContext';
import useFullPageLoader from '../hook/useFullPageLoader';
import { API_BASE_URL } from "../constants/constants";
import { logOut, saveLoginInfo } from './auth';

function useProvideAuth() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    const signIn = async (data) => {
        saveLoginInfo(data)
        setToken(data.token);
        await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const signOut = async cb => {
        logOut()
        setToken(null);
        await new Promise(resolve => setTimeout(resolve, 1000));
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
