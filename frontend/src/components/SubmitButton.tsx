import { Button } from "@mui/material"



const SubmitButton = () => {

  return (
    <Button
        type="submit"
        variant="contained"
        sx={{
            width: "100%",
            height: "50px",
            backgroundColor: "black"
        }}>
            SUBMIT
    </Button>
  )
}

export default SubmitButton