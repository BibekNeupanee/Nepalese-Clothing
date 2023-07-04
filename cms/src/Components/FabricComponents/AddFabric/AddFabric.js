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

  const onSubmit = async (data) => {
    reset({ name: "" });
    const newFabric = await insertFabric(data);
    console.log(newFabric.id);
    onFormSubmit(newFabric);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fabric-name">Enter Fabric:</label>
      <input {...register("name", { required: true })} className="input" />

      {errors.name && <span>This field is required</span>}
    
      <input type="submit" className="submit" />
    </form>
  );
}

export default AddFabric;
