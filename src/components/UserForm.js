import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleFieldsChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        return (
            <div>
                <form action="">
                    <div className="form-group">
                        <input type="text" name="" id="" className="form-control"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm;
