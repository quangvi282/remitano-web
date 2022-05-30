import React, { useReducer, useState, useEffect, useContext } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button} from 'primereact/button';
import { AppContext } from '../../context/AppContext';
import './Home.css';
import { AccountServices } from './AccountServices';
import { UrlShareServices } from './UrlShareServices';

const Home = () => {

    const context = useContext(AppContext);
    let history = useHistory();
    let location = useLocation();   
    let { from } = location.state || { from: { pathname: "/" } };

    const  {token, signIn, signOut, showLoader, hideLoader} = context;
    const [yotus, setYotus] = useState([]);

    const initialState = {
        email: null,
        password: null
    }

    const reducer = (state, action) => {
        if (action.type === "reset") {
            return initialState;
        }

        const result = {...state};
        result[action.type] = action.value;
        return result;
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { email, password } = state;


    const accountServices = new AccountServices();
    const urlshareServices = new UrlShareServices();

    useEffect(() => {
        console.log(token)
        if (token !== null) {
            console.log(token)
            // loadEvents(0, 10, '', "eventEnd", "desc")
            // loadYearStatsUser();
            getSharing('https://youtu.be/FLvOPMCvkEM')
        }
    }, []);

    const getSharing = (url) => {
        urlshareServices.getMetaData(url)
        .then(data => {
            if (data) {
                console.log(data)
            }
        })
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    }

    const requestLogin = (email, password) => {
        showLoader()
        // accountServices.login(email, password)
        // .then(data => {
        //     if (data && data.status && data.status.code === 1) {
        //         signIn(data.token);
        //         history.push("/");
        //         setEmail(null);
        // dispatch({type: 'reset'})
        //     } else {

                
        //     }
        //     hideLoader()
        // })
        signIn({token: 'sadsa'})
        hideLoader();
        dispatch({type: 'reset'})
        // history.push("/home")
    }

    const requestRegister = (email, password) => {
        showLoader()
        accountServices.register(email, password)
        .then(data => {
            if (data && data.status && data.status.code === 1) {
                requestLogin(email, password);
            } else {

                
            }
            hideLoader()
        })
    }

    return (
        <div 
            className='p-grid home-container'
            style={{
                marginTop: 50,
                justifyContent: 'center',
            }}>
            <div 
            className='p-col-12 p-md-12 p-lg-6'
            style={{
                marginTop: 10,
                float: 'right',
            }}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="pi pi-home" style={{fontSize: 32, color: '#41225d', margin: 5}}></i>
                    <span style={{fontSize: 40, fontWeight: 'bold'}}>Funny Movies</span>
                </div>
            </div>
            <div 
            className='p-col-12 p-md-12 p-lg-6'
            style={{
                marginTop: 10,
                float: 'right',
            }}>
                {token === null ?
                <div className="p-formgroup-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <InputText value={email} onChange={onChange} type="text" placeholder="Email" style={{margin: 5}}/>
                    <Password value={password} onChange={onChange} placeholder="Password" style={{margin: 5}} />
                    <Button type="button" label="Login" style={{margin: 5}} onClick={() => requestLogin(email, password)}/>
                    <Button type="button" label="Rigister"  style={{margin: 5}} 
                    onClick={() => requestRegister(email, password)}/>
                </div> : 
                <div className="p-formgroup-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span style={{fontSize: 24, fontWeight: 'bold'}}>Welcome</span>
                    <Button type="button" label="Logout"  style={{margin: 5}} 
                    onClick={() => signOut()}/>
                </div>}
            </div>
            
            <div style={{height: 3, width: '90%', background: 'black'}}/>
        </div>
    )
}

export default Home