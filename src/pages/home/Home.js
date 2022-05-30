import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button} from 'primereact/button';
import { Divider } from 'primereact/divider';
import { AppContext } from '../../context/AppContext';

const Home = () => {

    let history = useHistory();
    const context = useContext(AppContext);

    const  {token, showLoader, hideLoader} = context;
    const [yotus, setYotus] = useState([]);

    useEffect(() => {
        if (token !== null) {
            // loadEvents(0, 10, '', "eventEnd", "desc")
            // loadYearStatsUser();
        }
    }, []);

    return (
        <div 
            className='p-grid'
            style={{
                marginTop: 50,
                justifyContent: 'center',
            }}>
            <div 
            className='p-col-12 p-md-6 p-lg-6'
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
            className='p-col-12 p-md-6 p-lg-6'
            style={{
                marginTop: 10,
                float: 'right',
            }}>
                <div className="p-formgroup-inline" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <InputText type="text" placeholder="Email" style={{margin: 5}}/>
                    <Password placeholder="Password" style={{margin: 5}} />
                    <Button type="button" label="Login" style={{margin: 5}}/>
                    <Button type="button" label="Rigister"  style={{margin: 5}}/>
                </div>
            </div>
            
            <div style={{height: 3, width: '90%', background: 'black'}}/>
        </div>
    )
}

export default Home