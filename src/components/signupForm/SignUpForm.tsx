import { ChangeEvent, FormEvent, useState } from "react";
import { createUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase_utils";
import Button from "../buttonForm/ButtonForm";
import FormInput from "../formInput/formInput";
import "./signup.scss"

interface InitialState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialStateFormFields: InitialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export function SignupForm() {


    const [formField, setformField] = useState(initialStateFormFields);



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setformField({ ...formField, [id]: value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formField.password !== formField.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const { user } = await createUser(formField.email, formField.password);


            await createUserDocumentFromAuth(user, { displayName: formField.displayName });

            setformField(initialStateFormFields);
        } catch (error: any) {
            console.log(error.code);
        }

    }

    return (
        <div className="sign-up-container">
            <h1>Don't have an account?</h1>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    id={`displayName`}
                    label={`displayName`}
                    onChange={handleChange}
                    value={formField.displayName}
                    required={true} />
                <FormInput
                    id={`email`}
                    label={`email`}
                    onChange={handleChange}
                    value={formField.email}
                    required={true} />
                <FormInput
                    id={`password`}
                    label={`password`}
                    type={`password`}
                    onChange={handleChange}
                    value={formField.password}
                    required={true} />
                <FormInput
                    id={`confirmPassword`}
                    type={`password`}
                    label={`confirmPassword`}
                    onChange={handleChange}
                    value={formField.confirmPassword}
                    required={true} />

                <Button props={{ type: "submit" }}>
                    Sign Up
                </Button>
            </form>

        </div>
    );
}

