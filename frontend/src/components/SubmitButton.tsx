import { Button, CircularProgress } from "@mui/material"
import { SetStateAction, useState } from "react"

const SubmitButton = (props: {[key: string]: any}) => {

  return (
    <Button
        type="submit"
        variant="contained"
        sx={{
            width: "100%",
            height: "50px",
            backgroundColor: "black"
        }}
        disabled={props.pending? true : false}>
            {props.pending? <CircularProgress sx={{color: "white", scale: "0.65"}}/> : "SUBMIT"}
    </Button>
  )
}

export default SubmitButton