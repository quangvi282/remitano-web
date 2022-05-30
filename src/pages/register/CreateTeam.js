import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import './SignUp.css'

const CreateTeam = ({setSteps}) => {

    const [teamName, setTeamName] = useState(null);
    const [teamType, setTeamType] = useState(1);
    const [department, setDepartment] = useState(null);
    const [password, setPassword] = useState(1);
    const options = [{id: 1, name: 'Public'}, {id: 2, name: 'Private'}];
    const typeoptions = [{id: 1, name: 'Public'}, {id: 2, name: 'Private'}]

    return (
        <div>
            <div className="p-col-12 p-text-left signup-text">
                CREATE NEW TEAM
            </div>
            <div className="p-grid p-col-12" style={{display: 'flex', alignItems: 'center', marginTop: 50}}>
                <div className="p-col-12 p-md-3 p-lg-3 signup-title">Team Name</div>
                <div className="p-col-12 p-md-4 p-lg-4">
                    <InputText className="signup-input" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name"/>
                </div>
                <div className="p-col-12"/>
                <div className="p-col-12 p-md-3 p-lg-3 signup-title">Team Type</div>
                <div className="p-col-12 p-md-3 p-lg-3">
                    <Dropdown className="signup-input" value={teamType} options={typeoptions} onChange={(e) => setTeamType(e.value)} optionLabel="name" optionValue="id" placeholder="Email"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12 p-md-4 p-lg-4 signup-title" style={{fontSize: '14px', color: '#DB4F33'}}>*if applicable</div>
                <div className="p-col-12" />
                <div className="p-col-12 p-md-3 p-lg-3 signup-title">Team Department</div>
                <div className="p-col-12 p-md-3 p-lg-3">
                    <InputText className="signup-input" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Email"/>
                </div>
                <div className="p-col-12"/>

                <div className="p-col-12 p-md-3 p-lg-3 signup-title">Password Accessibility</div>
                <div className="p-col-12 p-md-3 p-lg-3">
                    <Dropdown className="signup-input" value={password} options={options} onChange={(e) => setPassword(e.value)} optionLabel="name" optionValue="id" placeholder="Choose one"/>
                </div>
                <div className="p-col-12" />

                <div className="p-col-12" style={{marginTop: 60}}>
                    <Button label="CREATE TEAM" className="signup-button" onClick={() => setSteps(5)}/>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam
