"use client";
import React from "react";
import { useForm } from "react-hook-form";

const FormValidition = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="py-6">
      <div className="text-center">
        <h2 className="lg:text-4xl md:text-2xl text-2xl  font-semibold">
          Get in touch with us.
        </h2>
        <p className="lg:px-52 md:px-48 py-2 lg:text-lg md:text-lg text-base text-[#686868]">
          Fill up the form and our team will get back to you within 24 hours
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 mt-8 lg:px-28"
      >
        <div className="lg:flex md:flex gap-2">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#686868] font-medium">
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              className="px-4 py-2 border outline-none rounded"
              type="text"
              placeholder="Enter Your First Name..."
            />
            {errors.firstName && (
              <span className="text-[#ce4646]">first Name is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#686868] font-medium">
              Last Name
            </label>
            <input
              {...register("lastname", { required: true })}
              className="px-4 py-2 border outline-none rounded"
              type="text"
              placeholder="Enter Your Last Name..."
            />
            {errors.lastname && (
              <span className="text-[#df4949]">last Name is required</span>
            )}
          </div>
        </div>

        <div className="lg:flex md:flex gap-2">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#686868] font-medium">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="px-4 py-2 border outline-none rounded"
              type="email"
              placeholder="Enter Your Email..."
            />
            {errors.email && (
              <span className="text-[#df4949]">email is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#686868] font-medium">
              Phone
            </label>
            <input
              {...register("phone", { required: true })}
              className="px-4 py-2 border outline-none rounded"
              type="text"
              placeholder="Enter Your Phone..."
            />
            {errors.phone && (
              <span className="text-[#df4949]">phone is required</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-[#686868] font-medium">
            Message
          </label>
          <textarea
            {...register("text", { required: true })}
            className="px-4 py-2 border outline-none rounded w-full"
            placeholder="I would like to get touch with you..."
            cols="8"
            rows="6"
          ></textarea>
          {errors.text && (
            <span className="text-[#df4949]">Message is required</span>
          )}
        </div>

        <div className="mt-4">
          <input
            className="font-medium hover:bg-[#FF970D] duration-300 cursor-pointer text-[#fff] bg-[#4DA528] rounded px-6 py-3 tracking-[2px]"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default FormValidition;
