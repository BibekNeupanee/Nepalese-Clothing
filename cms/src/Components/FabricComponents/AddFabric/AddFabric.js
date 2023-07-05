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
    const newFabric = await insertFabric(data);
    if (newFabric.message) {
      alert(newFabric.message);
    } else onFormSubmit(newFabric);
    reset({ name: "" });
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
