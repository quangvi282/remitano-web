import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import {Password} from 'primereact/password';
import { Button } from 'primereact/button';
import useWindowDimensions from '../../constants/constants';
import './SignUp.css'
import UserOptions from './UserOptions';
import CreateTeam from './CreateTeam';
import CreateDept from './CreateDept';
import CompletedForm from './CompletedForm';

const SignUp = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [middleName, setMiddleName] = useState(null);
    const [gender, setGender] = useState(null);
    const genderOptions = [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}];

    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(null);

    const [steps, setSteps] = useState(1);

    return (
        <div
            className="p-grid"
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 150,
            }}
            >
            <div className="p-grid p-col-12" style={{marginBottom: 50, display: 'flex', justifyContent: 'center', maxWidth: 1280, minHeight: '70vh'}}>
                <div className="p-grid p-col-12 signup-container">
                    {steps === 1 ? 
                    <>
                    <div className="p-col-12 p-text-left signup-text">
                        CREATE ACCOUNT
                    </div>
                    <div className="p-grid p-col-12" style={{display: 'flex', alignItems: 'center'}}>
                        <div className="p-col-12 p-md-2 p-lg-2 p-text-right signup-title fullname">Full Name</div>
                        <div className="p-col-12 signup-title name">First Name</div>
                        <div className="p-col-12 p-md-4 p-lg-4">
                            <InputText className="signup-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                        </div>
                        <div className="p-col-12 signup-title name">Middle Name</div>
                        <div className="p-col-12 p-md-3 p-lg-3">
                            <InputText className="signup-input" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middle name"/>
                        </div>
                        <div className="p-col-12 signup-title  name">Last Name</div>
                        <div className="p-col-12 p-md-3 p-lg-3">
                            <InputText className="signup-input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                        </div>

                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Gender</div>
                        <div className="p-col-12 p-md-3 p-lg-3">
                            <Dropdown className="signup-input" value={gender} options={genderOptions} onChange={(e) => setGender(e.value)} optionLabel="name" optionValue="id" placeholder="Gender"/>
                        </div>

                        <div className="p-col-12" />
                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Address</div>
                        <div className="p-col-12 p-md-10 p-lg-10">
                            <InputTextarea className="signup-input" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Eg. your address here" rows={5} autoResize/>
                        </div>

                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Email Address</div>
                        <div className="p-col-12 p-md-4 p-lg-4">
                            <InputText className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                        <div className="p-col-12" />

                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Phone Number</div>
                        <div className="p-col-12 p-md-4 p-lg-4">
                            <InputText className="signup-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Eg. your phone number here"/>
                        </div>
                        <div className="p-col-12" />

                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Password</div>
                        <div className="p-col-12 p-md-4 p-lg-4">
                            <Password className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Eg. your old password here" toggleMask/>
                        </div>
                        <div className="p-col-12" />

                        <div className="p-col-12 p-md-2 p-lg-2 signup-title">Retype Password</div>
                        <div className="p-col-12 p-md-4 p-lg-4">
                            <Password className="signup-input" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Eg. your old password here" toggleMask/>
                        </div>
                        <div className="p-col-12" />

                        <div className="p-col-12">
                            <Button label="CREATE ACCOUNT" className="signup-button" onClick={() => setSteps(2)}/>
                        </div>
                    </div>
                    </> : steps === 2 ?
                    <UserOptions  setSteps={setSteps}/> : steps === 3 ? 
                    <CreateTeam setSteps={setSteps}/> : steps === 4 ?
                    <CreateDept setSteps={setSteps}/> : 
                    <CompletedForm setSteps={setSteps}/>}
                </div>
            </div>
        </div>
    )
}

export default SignUp
