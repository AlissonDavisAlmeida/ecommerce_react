import SignupForm from "../../components/signupForm/SignUpForm";
import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../utils/firebase/firebase_utils";


function Signin() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp()

        const userDocRef = await createUserDocumentFromAuth(response.user)

        console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Login</button>
            <SignupForm />
        </div>

    );
}

export default Signin;