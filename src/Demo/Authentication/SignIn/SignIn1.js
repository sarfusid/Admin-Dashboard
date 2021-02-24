import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import fire from '../../../fire';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
class SignUp1 extends Component {
    constructor (props) 
        
        {
            super(props)
            this.login = this.login.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.signup = this.signup.bind(this);
            this.state={
                email:""
                ,password:""
            }
        
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=> {
            console.log('akash',u)
        }).catch((err)=>{
            console.log(err);
    })
   }
   signup(e){
       e.preventDefault();
       fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=> {
           console.log('login ho gya',u)
       }).catch((err)=>{
           console.log(err);
       })
   }
   handleChange(e){
       this.setState({
           [e.target.name] : e.target.value
       })
   }
// class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                {/* <Breadcrumb/> */}
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input type="email"
                                    name="email" 
                                    id="emial"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    
                                     placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" 
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    onChange={this.handleChange}
                                     placeholder="password"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.login}>Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
// }
export default SignUp1;