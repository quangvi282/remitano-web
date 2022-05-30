import React, {useState, useEffect, useContext} from 'react'
import { InputText } from 'primereact/inputtext';
import {Password} from 'primereact/password';
import { Button } from 'primereact/button';
import { useLocation, useHistory } from 'react-router-dom';
import './SignIn.css'
import { AppContext } from '../../context/AppContext';
import { login as requestLogin } from './AuthServices';

const SignIn = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState(null);

    let context = useContext(AppContext);
    let history = useHistory();
    let location = useLocation();   
    let { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        if (context.token !== null) {
            history.push(from.pathname !== '/login' ? from.pathname : '/')
        }
    }, [])

    const signIn = () => {
        requestLogin(email, password)
        .then(res => {
            if(res && res.token) {
                setErrors(null)
                context.signIn(res);
                history.push(from.pathname !== '/login' ? from.pathname : '/')
                
            } else if (res) {
                //error
                if (res.status !== null) {                    
                    setErrors(res.status.message)
                }
                console.log(res)
            }
        })
        .catch(err => {
            console.log(err)
            // this.setState({isError: 'Username or password is incorrect'})
        });
        
    }

    return (
        <div
            className="p-grid"
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 150,
            }}>
            <div className="p-grid p-col-12" style={{marginBottom: 50, display: 'flex', justifyContent: 'center', maxWidth: 1280, minHeight: '70vh'}}>
                <div className="p-grid p-col-12 signin-container">
                    <div className="p-col-12 p-text-center signin-text">
                        SIGN IN
                    </div>
                    <div className="p-col-12" style={{marginBottom: 50}}>
                        <div className="p-col-12 p-text-center signin-errors">
                            {errors}
                        </div>
                        <div className="p-col-12 p-text-left signin-title">E-mail address</div>
                        <div className="p-col-12">
                            <InputText className="signin-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Eg. your email or username here"/>
                        </div>
                        
                        <div className="p-col-12 p-text-left signin-title">Password</div>
                        <div className="p-col-12">
                            <Password className="signin-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Eg. your password here" toggleMask />
                        </div>

                        <div className="p-col-12 p-text-left signin-title" style={{color: '#698AFD', marginBottom: 20}}>Forgot your password?</div>
                        <div className="p-col-12">
                            <Button label="SIGN IN" className="signin-button" onClick={signIn}/>
                        </div>

                        <div className="p-col-12 p-text-center signin-title" style={{color: '#000000', marginTop: 10, marginBottom: 10}}>OR</div>

                        <div className="p-col-12" style={{display: 'flex', justifyContent: 'center'}}>
                            <Button label="Sign In with Facebook" icon="pi pi-facebook" className="signin-button-fb"/>
                        </div>

                        <div className="p-col-12" style={{display: 'flex', justifyContent: 'center'}}>
                            <Button label="Sign In with Google" icon="pi pi-google" className="signin-button-gle"/>
                        </div>

                        <div className="p-col-12" style={{display: 'flex', justifyContent: 'center'}}>
                            <Button label="Sign In with Apple" icon="pi pi-apple" className="signin-button-apl"/>
                        </div>
                        <div className="p-col-12 p-text-center signin-title" style={{color: '#5A5A5A', marginBottom: 20, cursor: 'pointer'}}>Not on QBP yet?
                        <div className="p-text-center signin-title" style={{color: '#698AFD', marginBottom: 20}}>Create account</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
