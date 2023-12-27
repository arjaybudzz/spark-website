import { Button, CircularProgress } from "@mui/material"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <Button
            sx={{

            }}>
                {pending? <CircularProgress /> : "SUBMIT"}
        </Button>
    )
}

export default SubmitButton;