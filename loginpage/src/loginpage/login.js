import React , {Component} from 'react';
import image from './1.jpg';
import './login.css';
class Login extends Component{ 
    render(){
        return(
            <div>
                <div class="a-form">
                    <div class="a-background">
                        <img src={image} className="backgroundImage" alt="image" />
                        <div class="container-form">
                        <span class="login-title">Account Login</span>
                        <form class="login-form">
                            <div class="a-input validate-input" data-validate="Enter username">
                                <input class="a-input-text" type="text" name="username" placeholder="User name" maxlength="30"></input>
                            </div>
                            <div class="a-input validate-input" data-validate="Enter password">
                                <input class="a-input-text" type="password" name="pass" placeholder="Password" maxlength="20"></input>
                            </div>
                            <div class="a-button">
                                <button class="a-button-text">Login</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
