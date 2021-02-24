import React from 'react';
import {NavLink} from 'react-router-dom';
import fire from '../../../fire';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

class SignUp1 extends React.Component {
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
    render () {
        return(
            <Aux>
                <Breadcrumb/>
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
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control"
                                     placeholder="Email"
                                      name="email"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control"
                                     placeholder="password"
                                      name="password"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.signup}>Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;