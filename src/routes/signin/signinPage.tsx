import {SignInForm, SignupForm}  from "../../components"
import "./signinPage.scss"

function Signin() {


    return (
        <div className="container">
            
            <SignInForm />
            <SignupForm />
        </div>

    );
}

export default Signin;