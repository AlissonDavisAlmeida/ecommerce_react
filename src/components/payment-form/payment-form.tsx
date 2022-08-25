import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FC } from "react";
import Button from "../buttonForm/ButtonForm";
import { FormContainer, PaymentStyled } from "./payment-form.styles";


export const PaymentForm: FC = () => {

    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: 1099
            })
        }).then(res => res.json());


        const clientSecret = response.paymentIntent.client_secret;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!,
                billing_details: {
                    name: "Jenny Rosen",
                    
                }
            }
        });

        if (result.error) {
            console.log(result.error.message);
        }

        console.log(result);
    }

    return (
        <PaymentStyled>

            <FormContainer onSubmit={paymentHandler}>

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