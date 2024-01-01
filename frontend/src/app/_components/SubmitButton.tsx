'use client'

import { Button, CircularProgress } from "@mui/material"
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <Button
            type="submit"
            sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                ":hover": {
                    backgroundColor: "gray",
                    opacity: "0.3",
                    color: "black"
                }
            }}
            disabled={pending? true : false}>
            {pending? <CircularProgress sx={{color: "white", scale: "0.70"}}/> : "SUBMIT"}
        </Button>
    )
}

export default SubmitButton;