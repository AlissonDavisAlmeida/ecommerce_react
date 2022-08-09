import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

function Spinner() {
    return (  
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    );
}

export default Spinner;