"use server"

import { revalidateTag } from "next/cache"
import { userUrl } from "../backendUrl"
import { z } from "zod"


export const createUser = async (formData: FormData) => {
    const schema = z.object({
        username: z.string({
            required_error: "Please enter a name"
        }),
        password: z.string({
            required_error: "Password is required"
        }).min(8, {
            message: "Password must be at least 8 characters"
        }).max(20, {
            message: "Password must be at most 20 characters"
        }),
        passwordConfirmation: z.string({
            required_error: "Please confirm your password"
        }).min(8, {
            message: "Password must be at least 8 characters"
        }).max(20, {
            message: "Password must be at most 20 characters"
        })
    }).required().strict().superRefine((val, ctx) => {
        if (val.password !== val.passwordConfirmation) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Passwords do not match"
            })
        }
    })

    schema.parse({
        username: formData.get("username-input"),
        password: formData.get("password-input"),
        passwordConfirmation: formData.get("password-confirmation-input")
    })
    await fetch(userUrl, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            username: formData.get("username-input"),
            password: formData.get("password-input"),
            password_confirmation: formData.get("password-confirmation-input")
        })
    }).then(() => {
        revalidateTag("users");
    }).catch((errors) => {
        console.log(errors);
    })
}