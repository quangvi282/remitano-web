import React, {useState} from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import logo from '../../images/useroptions.png';
import './SignUp.css'

const UserOptions = ({setSteps}) => {
    const categories = [{name: 'Individual', key: 'I'}, {name: 'Team', key: 'T'}, {name: 'Department', key: 'D'}];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="p-grid p-col-12">
            <div className="p-col-12" style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
                <img src={logo} style={{width: 150, height: 150}}/>
            </div>
            <div className="p-col-12 p-text-left signup-text" style={{color: '#DB4F33', textTransform: 'unset'}}>
                    Welcome! Are you ______________
            </div>
            <div className="p-col-12">
            <div className="p-col-12 signup-title p-text-center" style={{fontSize: '16px', color: '#DB4F33'}}>*choose 1</div>
            {
                categories.map((category) => {
                    return (
                        <div key={category.key} style={{marginLeft: 10, display: 'flex', justifyContent: 'flex-end'}}>
                            <div className="p-field-radiobutton">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key}/>
                            <div style={{marginLeft: 10}}>
                                    <div className="p-text-left signup-text" style={{color: '#6E2E40', textTransform: 'unset', fontSize: '24px'}}>{category.name}</div>
                                    <div><hr className="signup-hr" /></div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="p-col-12">
                <Button label={(selectedCategory.key === "T" || selectedCategory.key === "D") ? "Next Step" : "Need Help?"} className="signup-button" style={{float: 'right', maxWidth: 150}} onClick={() => {
                    if (selectedCategory.key === "T") {
                        setSteps(3) 
                    } 
                    if (selectedCategory.key === "D") {
                        setSteps(4) 
                    } 
                 }}/>
            </div>
        </div>
    )
}

export default UserOptions
