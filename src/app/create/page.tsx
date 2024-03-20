'use client'
import { SubmitHandler } from "react-hook-form"
import FormPost from "../component/formpost"
import { FormInputPost } from "../types"
import BackButton from "../component/backbutton"

const Create =() => {
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    }

    return(
        <>
        <BackButton/>
        <div className="text-center">Add New Post</div>
        <FormPost submit={handleCreatePost} isEditing={false}/>
        </>
    )
}

export default Create