import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

import Button from "../Button";
import Input, { InputTypes } from "../Input";
import CheckBox from "../CheckBox";
import { convertDateToUtc } from "@/utils/helpers";
import { BASE_URL } from "@/utils/constants";
import { SIGN_UP_API } from "./constant";
import UserContext from "@/context/UserContext";

interface FormValueProps {
  first_name: string;
  last_name: string;
  birth_date: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUpForm = () => {
  const { setAuth } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValueProps>();

  const onSubmit = handleSubmit((values) => {
    delete values.confirmPassword;
    const data = {
      ...values,
      birth_date: convertDateToUtc(values.birth_date),
    };
    setLoading(true);
    let url = BASE_URL + SIGN_UP_API;
    axios
      .post(url, data)
      .then((res) => {
        if (res?.data?.access_token) {
          setAuth(res?.data);
          setLoading(false);
        replace("/questionnaries");
          setTimeout(() => {
            toast.success("User registered successfully.");
          }, 600);
        }
      })
      .catch((error) => {
        console.log("error in registration", error);
        toast.error(`${error?.response?.data}`);
      })
      .finally(() => setLoading(false));
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
            name: "first_name",
            placeholder: "First Name",
            type: "text",
            error: errors?.first_name,
          },
          {
            name: "last_name",
            placeholder: "Last Name",
            type: "text",
            error: errors?.last_name,
          },
          {
            name: "birth_date",
            placeholder: "Date of Birth",
            type: "date",
            error: errors?.birth_date,
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
                return "Password validation failed.";
              }
            },
          },
        ].map((item, i) => {
          return (
            <>
              <Input
                key={item.name}
                className={classNames(
                  item.type === "date" && "cursor-pointer",
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
        <Button loading={loading} htmlType="submit">
          Create Account
        </Button>
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
