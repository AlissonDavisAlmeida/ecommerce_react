import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmail, signInWithGooglePopUp } from "../../utils/firebase/firebase_utils";
import Button from "../buttonForm/ButtonForm";
import FormInput from "../formInput/formInput";
import "./signinForm.scss"

interface InitialState {
    email_form: string;
    password_form: string;
}

const initialStateFormFields: InitialState = {
    email_form: "",
    password_form: ""
}



export function SignInForm() {

    const [formField, setformField] = useState(initialStateFormFields);
    const navigate = useNavigate()

    const signinWithGoogle = async () => {
         await signInWithGooglePopUp()

        navigate("/")

    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        try {
            const { user } = await signInWithEmail(formField.email_form, formField.password_form)

            setformField(initialStateFormFields)
        } catch (error: any) {
            if (error.code === "auth/user-not-found") {
                alert("User not found")
            }
            console.log(typeof error)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setformField({ ...formField, [id]: value });
    }

    return (
        <div className="sign-in-container">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    id="email_form"
                    label="Email"
                    type="email"
                    required={true}
                    value={formField.email_form}
                    onChange={handleChange}
                />
                <FormInput
                    id="password_form"
                    label="Password"
                    type="password"
                    required={true}
                    value={formField.password_form}
                    onChange={handleChange}
                />
                <div className="buttons">

                    <Button type="inverted" >Sign In</Button>
                    <Button type="google-sign-in" props={{ type: "button", onClick: signinWithGoogle }}>Google</Button>
                </div>

            </form>
        </div>
    );
}

