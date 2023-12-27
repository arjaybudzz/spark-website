import { Container } from "@mui/material"
import LoginForm from "./_components/LoginForm"

const Login = () => {
    return (
    <Container
        sx={{
            width: "100%",
            height: "100%"
        }}
        component="div">
        <LoginForm />
    </Container>
    )    
}

export default Login;