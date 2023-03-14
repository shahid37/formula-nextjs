"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/navigation";

import Button from "../Button";
import Input from "../Input";
import CheckBox from "../CheckBox";
import Loader from "../Loader";
import { BASE_URL } from "../../utils/constants";

import { LOGIN_API } from "./constant";

interface FormValueProps {
  email: string;
  password: string;
}

const LoginForm = ({ auth, setAuth }: any) => {
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueProps>();

  // Header to avoid CORS error in frontEnd
  const header = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    fetch(BASE_URL + LOGIN_API, { headers: header })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log("data is", data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
    // replace("/home");
    console.log("formData", data);
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const commonErrorClassNames = "border-red focus:border-red";
  const commonErrorTextClassNames = "text-red text-sm mt-1 font-medium";

  if (loading) {
    return <Loader />;
  }
  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <Input
        className={classNames(errors?.email && commonErrorClassNames)}
        {...register("email", { required: "Field is required." })}
        name="email"
        placeholder="Email"
        type="email"
      />
      {errors?.email && (
        <p className={classNames(commonErrorTextClassNames)}>
          {errors.email.message}
        </p>
      )}

      <Input
        className={classNames(
          errors?.password && commonErrorClassNames,
          "mt-4"
        )}
        {...register("password", { required: "Field is required." })}
        name="password"
        placeholder="Password"
        type="password"
      />
      {errors?.password && (
        <p className={classNames(commonErrorTextClassNames)}>
          {errors.password.message}
        </p>
      )}
      <div className="text-gray text-sm font-medium mt-2 uppercase">
        <Link href={"/update-password"}>Forgot Password</Link>
      </div>
      <div className="mt-10">
        <CheckBox
          handleChange={handleChange}
          isChecked={isChecked}
          label={"Remember this device"}
        />
      </div>
      <div className="mt-28">
        <Button htmlType="submit">Login</Button>
        <Link
          href={"/signUp"}
          className="flex justify-center text-gray text-sm font-medium mt-3 uppercase"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
