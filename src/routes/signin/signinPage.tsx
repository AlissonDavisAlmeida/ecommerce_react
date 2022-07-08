import { useContext, useEffect } from "react";
import {SignInForm, SignupForm}  from "../../components"
import { UserContext } from "../../context/user_context";
import "./signinPage.scss"

function Signin() {

    const user = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [])
    

    return (
        <div className="container">
            
            <SignInForm />
            <SignupForm />
        </div>

    );
}

export default Signin;