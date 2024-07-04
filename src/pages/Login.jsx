import React from "react";
import { useForm, useWatch } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };

  console.log(watch("username"));

  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold text-center text-gray-800">Login</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-3 max-w-96 mx-auto"
      >
        <label className=" text-gray-700 text-sm font-semibold mt-4 mb-1">
          Username:
        </label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 6, message: "Minimum length 6" },
          })}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
        {errors.username && (
          <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
        )}
        <label className=" text-gray-700 text-sm font-semibold mt-4 mb-1">
          Password
        </label>
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: { value: 8, message: "Minimum length 8" },
          })}
          type="password"
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
