"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPost } from "../types";
import { FC } from "react";

interface FormPostProps{
    submit: SubmitHandler<FormInputPost>,
    isEditing: boolean
}
const FormPost: FC<FormPostProps> = ({submit,isEditing}) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <>
      <form onSubmit={handleSubmit(submit)}  className="flex flex-col items-center justify-center gap-5 mt-5">
        <input
          {...register("title", {required: true})}
          type="text"
          placeholder="post title ..."
          className="input input-bordered w-full max-w-lg "
        />
        <textarea
          {...register("content" ,{required: true})}
          className="textarea textarea-bordered w-full max-w-lg"
          placeholder="post content"
        ></textarea>

        <select
          className="select select-bordered w-full max-w-lg "
          {...register("tags" ,{required: true})}
          defaultValue={''}
        >
          <option disabled value=' '>
            Select tags
          </option>
          <option>javasc</option>
          <option>djan</option>
          <option>php</option>
        </select>

        <button type="submit" className="border w-full max-w-lg btn btn-primary">
          {isEditing? 'Update': 'Create'}
        </button>
      </form>
    </>
  );
};
export default FormPost;
