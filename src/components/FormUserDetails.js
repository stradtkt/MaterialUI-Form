import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Enter Personal Details"/>
                    <TextField hintText="Enter Your Occupation" floatingLabelText="Occupation" onChange={handleChange('occupation')} defaultValue={values.occupation}/>
                    <br/>
                    <TextField hintText="Enter Your City" floatingLabelText="City" onChange={handleChange('city')} defaultValue={values.city}/>
                    <br/>
                    <TextField hintText="Enter Your Bio" floatingLabelText="Bio" onChange={handleChange('bio')} defaultValue={values.bio}/>
                    <br/>
                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}/>
                    <RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back}/>
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: '50px'
    }
}

export default FormUserDetails;
