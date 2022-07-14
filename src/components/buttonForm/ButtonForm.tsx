import React from "react";
import "./button.styles.scss"

type BUTTON_TYPE_CLASSES = 
    | "google-sign-in"
    | "inverted"


interface ButtonProps {
    type?: BUTTON_TYPE_CLASSES;
    children: React.ReactNode;
    onClick?: (...args:any) => void;
    props?: any
}

function Button({ children, type, props, onClick }: ButtonProps) {
    return (
        <button  className={`button-container ${type}`} onClick={onClick}  {...props}>
            {children}
        </button>
    );
}

export default Button;