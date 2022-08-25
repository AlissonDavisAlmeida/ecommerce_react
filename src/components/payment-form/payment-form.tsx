import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FC } from "react";
import Button from "../buttonForm/ButtonForm";
import { FormContainer, PaymentStyled } from "./payment-form.styles";


export const PaymentForm: FC = () => {

    const stripe = useStripe
    const elements = useElements()

    const paymentHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        

    }

    return (
        <PaymentStyled>

            <FormContainer>

                <CardElement />
                <Button
                    type="inverted"
                >
                    Pay now
                </Button>
            </FormContainer>
        </PaymentStyled>

    )
}