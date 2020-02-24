import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

class SignUpForm extends Component {
    state = { 
        isSignUpSuccessfull: false
     }
     submitSignUpForm = () =>{
        this.setState({isSignUpSuccessfull: true})
    }

    render() {
        const {isSignUpSuccessfull} = this.state
        return (
            <Fragment>
                <form onSubmit = {this.submitSignUpForm}>
                    <div className = 'form-group'>
                        <label for= 'Full Name'>Full Name</label>
                        <input type = 'text' className= 'form-control'/>
                    </div>
                    <div className = 'form-group'>
                        <label for= 'phone'>Phone Number</label>
                        <input type = 'text' className= 'form-control'/>
                    </div>
                    <div className = 'form-group'>
                        <label for= 'username'>User Name</label>
                        <input type = 'text' className= 'form-control'/>
                    </div>
                    <div className = 'form-group'>
                        <label for= 'password'>Password</label>
                        <input type = 'password' className= 'form-control'/>
                    </div>
                    <button type= 'submit' className='btn btn-primary'>Submit</button>
                </form>
                {isSignUpSuccessfull && <div> Sign Up Successfull!!</div>}
            </Fragment>
        );
    }
}

export default SignUpForm;