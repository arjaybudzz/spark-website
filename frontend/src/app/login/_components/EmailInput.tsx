import { TextField } from "@mui/material"

const EmailInput = () => {
    return (
        <TextField
            type="email"
            label="Email" 
            sx={{
                width: "100%"
            }}/>
    )
}

export default EmailInput;