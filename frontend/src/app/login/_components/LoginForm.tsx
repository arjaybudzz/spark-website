import Typography from "@mui/material/Typography";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "@/app/_components/SubmitButton";

const LoginForm = () => {
    return (
        <form
            className="flex flex-col justify-around items-center w-1/3 h-3/4 bg-white shadow-xl rounded-xl px-8">
                <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{
                        fontWeight: "bold"
                    }}>
                    Sign in to Spark
                </Typography>
                <div
                    className="flex flex-col w-full h-auto justify-center items-center gap-4">
                    <EmailInput />
                    <PasswordInput />
                </div>
            
            <SubmitButton />
        </form>
    )
}

export default LoginForm;