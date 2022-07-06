import {SignInForm, SignupForm}  from "../../components"
import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../utils/firebase/firebase_utils";
import "./signinPage.scss"

function Signin() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp()

        const userDocRef = await createUserDocumentFromAuth(response.user)

        console.log(userDocRef)
    }

    return (
        <div className="container">
            
            <SignInForm />
            <SignupForm />
        </div>

    );
}

export default Signin;