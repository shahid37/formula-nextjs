import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import Button from "../Button";
import Input, { InputTypes } from "../Input";
import CheckBox from "../CheckBox";

interface FormValueProps {
  name: string;
  dateOfBirth: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValueProps>();

  const onSubmit = handleSubmit((data) => {
    push("/home");
    console.log(data);
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [isSubscribe, setIsSubscribe] = useState(false);
  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSubscribe(e.target.checked);
  };
  const commonErrorClassNames = "border-red focus:border-red";
  const commonErrorTextClassNames = "text-red text-sm mt-1 font-medium";

  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <>
        {[
          {
            name: "name",
            placeholder: "Name",
            type: "text",
            error: errors?.name,
          },
          {
            name: "dateOfBirth",
            placeholder: "Date of Birth",
            type: "text",
            error: errors?.dateOfBirth,
          },
          {
            name: "email",
            placeholder: "Email",
            type: "email",
            error: errors?.email,
          },
          {
            name: "password",
            placeholder: "Password",
            type: "password",
            error: errors?.password,
          },
          {
            name: "confirmPassword",
            placeholder: "Retype New Password",
            type: "password",
            error: errors?.confirmPassword,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          },
        ].map((item, i) => {
          return (
            <>
              <Input
                key={item.name}
                className={classNames(
                  item.error && commonErrorClassNames,
                  i !== 0 && "mt-4"
                )}
                {...register(item.name as any, {
                  required: "Field is required",
                  validate: item.validate && item.validate,
                })}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type as InputTypes}
              />
              {item.error && (
                <p className={classNames(commonErrorTextClassNames)}>
                  {item.error.message}
                </p>
              )}
            </>
          );
        })}
      </>
      <div className="mt-10">
        <CheckBox
          handleChange={handleChange}
          isChecked={isChecked}
          label={"I agree to terms & conditions"}
        />
      </div>
      <div className="mt-2">
        <CheckBox
          handleChange={handleSubscribe}
          isChecked={isSubscribe}
          label={"Subscribe to newsletter"}
        />
      </div>
      <div className="mt-28">
        <Button htmlType="submit">Create Account</Button>
        <Link
          href={"/"}
          className="flex justify-center text-gray text-sm font-medium mt-3 uppercase"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

SignUpForm.defaultProps = {};
export default SignUpForm;
