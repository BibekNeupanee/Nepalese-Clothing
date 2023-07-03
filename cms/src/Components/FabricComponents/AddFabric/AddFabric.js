import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./AddFabric.scss";
import { insertFabric } from "../../../services/FabricService";

function AddFabric({ onFormSubmit }) {
  const formRef = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset({ name: "" });
    insertFabric(data);
    onFormSubmit(data);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} className="text-area" />

      {errors.name && <span>This field is required</span>}

      <input type="submit" className="submit" />
    </form>
  );
}

export default AddFabric;
