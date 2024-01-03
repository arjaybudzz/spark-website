import { Link, Typography } from '@mui/material'

const RegisterModal = () => {
  return (
    <div className='flex justify-center items-center bg-gray-300 w-screen h-screen'>
        <div className='flex flex-col justify-center items-center bg-white w-1/2 h-1/2 rounded-xl gap-5 shadow-xl'>
            <Typography 
                variant="h4" 
                component="h1" 
                sx={{
                    fontWeight: "bold"
                }}>
                You have registered to Spark
            </Typography>

            <Link href="/login">
              Go to login
            </Link>
        </div>
    </div>
  )
}

export default RegisterModal