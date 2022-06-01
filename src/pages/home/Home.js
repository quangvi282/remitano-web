import React, { useReducer, useState, useEffect, useContext } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AppContext } from '../../context/AppContext';
import './Home.css';
import { AccountServices } from './AccountServices';
import { UrlShareServices } from './UrlShareServices';
import {youtubeParser} from '../../utils/Utils'

const Home = () => {

    const context = useContext(AppContext);
    let history = useHistory();
    let location = useLocation();   
    let { from } = location.state || { from: { pathname: "/" } };

    const  {token, signIn, signOut, showLoader, hideLoader} = context;
    const [total, setTotal] = useState(0);
    const [urlShareds, setUrlShareds] = useState([]);

    const initialState = {
        email: null,
        password: null,
        errors: null,
        url: null,
        isSharing: false
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
    const { email, password, errors, url, isSharing } = state;


    const accountServices = new AccountServices();
    const urlshareServices = new UrlShareServices();

    useEffect(() => {
        getUrlList("", 0, 10, 'id', 'desc');
    }, [token]);

    const shareAction = (url) => {
        showLoader();
        let videoId = youtubeParser(url)
        urlshareServices.updateShared(videoId)
        .then(data => {
            if (data && data.status && data.status.code === 1) {
                getUrlList("", 0, 10, 'id', 'desc');
            } else {
                hideLoader()
                dispatch({type: 'errors', value: data.status.message})
            }
        })
        
    }

    const getTitle = (url) => {
        let data = urlshareServices.getMetaData(url);
        return data ? data.title : ""

    }

    const getUrlList = (search, page, size, column, order) => {
        showLoader();
        urlshareServices.getSharedList(search, page, size, column, order)
        .then(data => {
            if (data && data.status && data.status.code === 1) {
                setUrlShareds(data.urlSharedList);   
                setTotal(data.total)
            } else {
                dispatch({type: 'errors', value: data.status.message})
            }
            hideLoader()
        })
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    }

    const requestLogin = (email, password) => {
        showLoader()
        accountServices.login(email, password)
        .then(data => {
            if (data && data.status && data.status.code === 1) {
                signIn(data);
                dispatch({type: 'reset'})
                dispatch({type: 'email', value: email});
            } else {
                dispatch({type: 'errors', value: data.status.message})
            }
            hideLoader();
        })

    }

    const requestLogout = (e) => {
        e.preventDefault();
        dispatch({type: 'reset'});
        signOut();
    }

    const requestRegister = (email, password) => {
        showLoader()
        accountServices.register(email, password)
        .then(data => {
            if (data && data.status && data.status.code === 1) {
                requestLogin(email, password);
            } else {
                dispatch({type: 'errors', value: data.status.message})
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
                <><div className="p-formgroup-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <InputText value={email} onChange={onChange} name="email" placeholder="Email" style={{margin: 5}}/>
                    <Password value={password} onChange={onChange} name="password" placeholder="Password" style={{margin: 5}} />
                    <Button type="button" label="Login" style={{margin: 5}} onClick={(e) => {
                        e.preventDefault();
                        requestLogin(email, password)
                    }}/>
                    <Button type="button" label="Rigister"  style={{margin: 5}} 
                    onClick={(e) => {
                        e.preventDefault();
                        requestRegister(email, password);
                    }}/>
                </div> <div className="p-col-12 p-text-center home-errors">
                            {errors}
                        </div></>: 
                <div className="p-formgroup-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span style={{fontSize: 20, fontWeight: 'bold', marginRight: 10}}>Welcome {email}</span>
                    <Button className='share-button' type="button" label="Share a movie"  style={{margin: 5}} 
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({type: 'isSharing', value: true})
                    }}
                    />
                    <Button type="button" label="Logout"  style={{margin: 5}} 
                    onClick={(e) => requestLogout(e)}/>
                </div>}
            </div>
            
            <div style={{height: 3, width: '90%', background: 'black', marginBottom: 20}}/>
            {urlShareds.length > 0 && urlShareds.map(item => (
                <div className="p-grid p-col-12" style={{display: 'flex', justifyContent: 'center', margin: 10}}>
                    <div className="p-col-12 p-md-6 p-lg-6" style={{display: 'flex', justifyContent: 'center'}}>
                        <iframe width="420" height="315"
                        src={"https://www.youtube.com/embed/" + item.videoId}>
                        </iframe>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-6 normal-text" style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{with: '100%', }}>{getTitle("https://youtu.be/" + item.videoId)}
                            <p style={{fontStyle: 'italic'}}>Shared by <span style={{fontWeight: 'bold'}}>{item.username}</span></p>
                        </div>
                        <div></div>
                    </div>
                </div>
            ))}
            <Dialog visible={isSharing} style={{ width: '450px' }} header="Share a movie" modal onHide={() => dispatch({type: 'isSharing', value: false})}>
                <div className="p-grid" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="p-col-12"><InputText value={url} onChange={onChange} name="url" placeholder="https://youtube.com/example" style={{width: '100%'}}/></div>
                    <Button label="Share" style={{marginTop: '10px'}} onClick={e => {
                        e.preventDefault();
                        dispatch({type: 'isSharing', value: false})
                        shareAction(url)
                    }}/>
                </div>
            </Dialog>
        </div>
    )
}

export default Home