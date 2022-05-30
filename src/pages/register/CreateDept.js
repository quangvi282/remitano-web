import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import './SignUp.css'

const CreateDept = ({setSteps}) => {

    const [deptName, setDeptName] = useState(null);
    const [deptType, setDeptType] = useState(1);
    const [firstName, setFirstName] = useState(null);
    const [middleName, setMiddleName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);

    const typeoptions = [{id: 1, name: 'Public'}, {id: 2, name: 'Private'}]

    return (
        <div>
            <div className="p-col-12 p-text-left signup-text">
                CREATE NEW DEPARTMENT
            </div>
            <div className="p-grid p-col-12" style={{display: 'flex', alignItems: 'center'}}>
                <div className="p-col-12 p-md-2 p-lg-2 signup-title">Department Name</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <InputText className="signup-input" value={deptName} onChange={(e) => setDeptName(e.target.value)} placeholder="Department Name"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12 p-md-2 p-lg-2 signup-title">Department Type</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <Dropdown className="signup-input" value={deptType} options={typeoptions} onChange={(e) => setDeptType(e.value)} optionLabel="name" optionValue="id" placeholder="Email"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12 p-md-2 p-lg-2 p-text-right signup-title fullname">Contact Name</div>
                <div className="p-col-12 signup-title name">First Name</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <InputText className="signup-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                </div>
                <div className="p-col-12 signup-title name">Middle Name</div>
                <div className="p-col-12 p-md-3 p-lg-3">
                    <InputText className="signup-input" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middle name(Initial)"/>
                </div>
                <div className="p-col-12 signup-title name">Last Name</div>
                <div className="p-col-12 p-md-3 p-lg-3">
                    <InputText className="signup-input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                </div>

                <div className="p-col-12 p-md-2 p-lg-2 signup-title">Phone Number</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <InputText className="signup-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Eg. your phone number here"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12" />
                <div className="p-col-12 p-md-2 p-lg-2 signup-title">Address</div>
                <div className="p-col-12 p-md-10 p-lg-10">
                    <InputTextarea className="signup-input" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Eg. your address here" rows={5} autoResize/>
                </div>

                <div className="p-col-12 p-md-2 p-lg-2 signup-title">Contact Email Address</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <InputText className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12">
                    <Button label="CREATE DEPARTMENT" className="signup-button" onClick={() => setSteps(5)}/>
                </div>
            </div>
        </div>
    )
}

export default CreateDept
