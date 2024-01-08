import { useState } from 'react'
import { Button, Fab, TextField } from '@mui/material'
import { PostAdd } from '@mui/icons-material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPost } from '../../../api/post/postActions'
import { ExitToApp } from '@mui/icons-material'

const PostForm = () => {
  const [postContent, setPostContent] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validation = yup.object().shape({
    content: yup.string().required("Please enter a post.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  })

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(() => createPost(postContent))}
      className='w-1/2 h-1/2 flex flex-col justify-end bg-gray-300 rounded-xl shadow-sm shadow-white p-6 relative'>
        <div className='flex h-auto justify-end items-end absolute top-6 left-0 right-6'>
          <Fab 
            aria-label='back' 
            size='small'
            sx={{
              opacity: "1",
              backgroundColor: "rgb(209 213 219)"
            }}>
            <ExitToApp />
          </Fab>
        </div>
        <TextField 
          type="text"
          label="Share your thoughts..."
          multiline
          maxRows={5}
          error={errors.content? true : false}
          helperText={errors.content?.message}
          {...register("content")}
          value={postContent}
          onChange={
            (e) => setPostContent(e.target.value) 
          }
          sx={{
            position: "absolute",
            left: "24px",
            right: "24px",
            top: "84px",
            height: "50px"
          }}/>
        <div className='flex justify-end flex-row items-center'>
          <Button 
            variant="contained" 
            startIcon={<PostAdd />}
            type='submit' 
            sx={{
              verticalAlign: "middle",
              backgroundColor: "black",
              ":hover": {
                backgroundColor: "gray"
              }
            }}>
            Share
          </Button>
        </div>
    </form>
  )
}

export default PostForm