import { TextField } from "@mui/material"

const PasswordInput = () => {
    return (
        <TextField
            type="password"
            label="Password" 
            sx={{
                width: "100%"
            }}/>
    )
}

export default PasswordInput;