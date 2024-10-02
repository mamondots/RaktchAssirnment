"use client";
import React from "react";
import { useForm } from "react-hook-form";

const BookValidation = () => {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <input
            {...register("name", { required: true })}
            className="w-full px-2 py-2 border outline-none rounded"
            type="text"
            placeholder="Your Name*"
          ></input>
          {errors.name && (
            <span className="text-[#ce4646]">Name is required</span>
          )}
          <input
            {...register("phone", { required: true })}
            className="w-full px-2 py-2 border outline-none rounded"
            type="text"
            placeholder="Phone Number"
          ></input>
          {errors.phone && (
            <span className="text-[#ce4646]">phone is required</span>
          )}
        </div>
        <div>
          <input
            {...register("email", { required: true })}
            className="w-full px-2 py-2 border outline-none rounded"
            type="email"
            placeholder="Your Email*"
          ></input>
          {errors.email && (
            <span className="text-[#ce4646]">email is required</span>
          )}
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <input
            {...register("people")}
            className="w-full px-2 py-2 border outline-none rounded"
            type="text"
            placeholder="Peoples"
          ></input>
          {errors.people && (
            <span className="text-[#ce4646]">people is required</span>
          )}
          <input
            {...register("text")}
            className="w-full px-2 py-2 border outline-none rounded"
            type="text"
            placeholder="Country"
          ></input>
          {errors.text && (
            <span className="text-[#ce4646]">message is required</span>
          )}
        </div>

        <div>
          <textarea
            {...register("firstName", { required: true })}
            className="w-full px-2 py-2 border outline-none rounded"
            placeholder="Any Message..."
            cols="8"
            rows="6"
          ></textarea>
          {errors.firstName && (
            <span className="text-[#ce4646]">first Name is required</span>
          )}
        </div>

        <div className="py-2 flex justify-center items-center bg-[#4DA528] hover:bg-[#FBAD17] duration-300 cursor-pointer text-[#fff] rounded-md uppercase">
          <input className="font-semibold upp" type="submit" value="Book Now" />
        </div>
      </form>
    </div>
  );
};

export default BookValidation;
