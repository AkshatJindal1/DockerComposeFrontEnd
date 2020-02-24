import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

class LoginForm extends Component {
    state = { 
        isLoginSuccessfull : false
     }

    submitLoginForm = () =>{
        this.setState({isLoginSuccessfull: true})
    }

    render() {
        const {isLoginSuccessfull} = this.state
        return (
            <Fragment>
                <form onSubmit = {this.submitLoginForm}>
                    <div className = 'form-group'>
                        <label for= 'username'>UserName</label>
                        <input type = 'text' className= 'form-control'/>
                    </div>
                    <div className = 'form-group'>
                        <label for= 'password'>Password</label>
                        <input type = 'password' className= 'form-control'/>
                    </div>
                    <button type= 'submit' className='btn btn-primary'>Submit</button>
                </form>
                {isLoginSuccessfull && <div> Login Successfull!!</div>}
            </Fragment>
        );
    }
}

export default LoginForm;