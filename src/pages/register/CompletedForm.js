import React, {useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import logo from '../../images/useroptions.png';
import './SignUp.css'

const CompletedForm = ({}) => {
    let history = useHistory();

    return (
        <div className="p-grid p-col-12" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="p-col-12" style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
                <img src={logo} style={{width: 150, height: 150}}/>
            </div>
            <div className="p-col-12 p-text-center signup-text" style={{color: '#DB4F33', textTransform: 'unset'}}>
            You have successfully registered!
            </div>
            <div className="p-col-12" style={{display: 'flex', justifyContent: 'center', height: 70}}>
                <Button label="Go to the Main Page" className="signup-button" style={{width: 250}} onClick={() => history.push("/")}/>
            </div>

            <div className="p-grid p-col-12" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 70, width: 250, marginBottom: 10}}>
                <div className="p-col-2"><i class="fa fa-share-alt fa-3x" style={{color: '#DB4F33'}}></i></div>
                <div className="p-col-10 p-text-center signup-title">share to</div>
                <div lassName="p-col-12"><hr className="signup-hr" style={{width: 250}}/></div>
            </div>
            <div className="p-col-12" style={{display: 'flex', justifyContent: 'center'}}>
                <i class="fab fa-facebook fa-3x" style={{color: '#6E2E40', marginRight: 10, cursor: 'pointer'}}></i>
                <i class="fab fa-instagram fa-3x" style={{color: '#6E2E40', marginRight: 10, cursor: 'pointer'}}></i>
                <i class="fab fa-linkedin fa-3x" style={{color: '#6E2E40', marginRight: 10, cursor: 'pointer'}}></i>
                <i class="fab fa-twitter fa-3x" style={{color: '#6E2E40', cursor: 'pointer'}}></i>
            </div>
            
        </div>
    )
}

export default CompletedForm
