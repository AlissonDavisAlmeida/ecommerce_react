import React from "react";
import {BaseButtonStyles ,GoogleSignInButton, InvertedButton } from "./ButtonStyled"

type BUTTON_TYPE_CLASSES =
    | "base"
    | "google-sign-in"
    | "inverted"


const getButton = (buttonType: BUTTON_TYPE_CLASSES = "base")=>(
    {
        ["base"]: BaseButtonStyles,
        ["google-sign-in"]: GoogleSignInButton,
        ["inverted"]: InvertedButton
    }[buttonType]
)


interface ButtonProps {
    type?: BUTTON_TYPE_CLASSES;
    children: React.ReactNode;
    onClick?: (...args: any) => void;
    props?: any
}

function Button({ children, type, props, onClick }: ButtonProps) {

    const ButtonClass = getButton(type);

    return (
        <ButtonClass onClick={onClick}  {...props}>
            {children}
        </ButtonClass>
    );
}

export default Button;