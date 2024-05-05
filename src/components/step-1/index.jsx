import React from "react";
import style from "./step1.module.css";
import Layout from "../layout";
import CustomInput from "../customInputs/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").nonempty(),
  email: z.string().email("Invalid email address").nonempty(),
  phone: z
    .string()
    .regex(/^\+\d[\d\s]*$/, "Invalid phone number")
    .nonempty(),
});

const Step1 = ({ onStepSubmit, data, ...props }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data.step1,
    resolver: zodResolver(schema),
  });

  const onSubmit = (datas) => {
    onStepSubmit("step1", "step2", datas);
  };

  return (
    <Layout {...props} handleFormSubmit={handleSubmit(onSubmit)}>
      <div className={style.step_1}>
        <CustomInput
          defaultValue={data.step1.name}
          id="name"
          label="Name"
          placeholder="Name"
          register={register}
          errors={errors}
        />

        <CustomInput
          defaultValue={data.step1.email}
          id="email"
          label="Email Address"
          placeholder="Email Address"
          register={register}
          errors={errors}
        />

        <CustomInput
          defaultValue={data.step1.phone}
          id="phone"
          label="Phone Number"
          placeholder="e.g +1 234 567 890"
          register={register}
          errors={errors}
          type="text"
        />
      </div>
    </Layout>
  );
};

export default Step1;
