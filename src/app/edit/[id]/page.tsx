"use client";
import FormPost from "@/app/component/formpost";
import { FormInputPost } from "@/app/types";
import { SubmitHandler, useForm } from "react-hook-form";
import BackButton from "@/app/component/backbutton";

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <>
    <BackButton/>
      <h1 className="text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </>
  );
};

export default EditPostPage;
