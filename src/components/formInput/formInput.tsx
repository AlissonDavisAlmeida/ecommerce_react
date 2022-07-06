import { ChangeEvent } from "react";
import "./form-input.styles.scss"

interface FormInputProps {
    label: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
    type?: string;
}

function FormInput({label, ...props}: FormInputProps) {
    return (
        <div className={`group`}>
            <input className={`form-input`} {...props} />
            <label className={`${props.value.length > 0 ? 'shrink' : ''} form-input-label`} htmlFor={label}>{label}</label>
        </div>
    );
}

export default FormInput;