import React from "react";
import "./button.styles.scss"

type BUTTON_TYPE_CLASSES = 
    | "google-sign-in"
    | "inverted"


interface ButtonProps {
    type?: BUTTON_TYPE_CLASSES;
    children: React.ReactNode;
    props: any
}

function Button({ children, type, props }: ButtonProps) {
    return (
        <button className={`button-container ${type}`} {...props}>
            {children}
        </button>
    );
}

export default Button;