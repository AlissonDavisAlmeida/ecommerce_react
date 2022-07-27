import { ChangeEvent } from "react";
import { Group,FormInputLabel,Input } from "./formStyled";
import "./formStyled.tsx"

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
        <Group>
            <Input {...props} />
            <FormInputLabel shrink={props.value.length > 0 } htmlFor={props.id}>{label}</FormInputLabel>
        </Group>
    );
}

export default FormInput;