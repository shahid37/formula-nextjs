import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import Button from "../Button";
import Input from "../Input";
import CheckBox from "../CheckBox";

interface FormValuesProps {
  password: string;
  confirm_password: string;
}

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesProps>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const commonErrorClassNames = "border-red focus:border-red";
  const commonErrorTextClassNames = "text-red text-sm mt-1 font-medium";

  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <Input
        className={classNames(errors?.password && commonErrorClassNames)}
        {...register("password", { required: "Password is required" })}
        name="password"
        placeholder="New Password"
        type="password"
      />
      {errors?.password && (
        <p className={classNames(commonErrorTextClassNames)}>
          {errors.password.message}
        </p>
      )}

      <Input
        className={classNames(
          errors?.confirm_password && commonErrorClassNames,
          "mt-4"
        )}
        {...register("confirm_password", {
          required: "Field is required",
          validate: (val: string) => {
            if (watch("password") != val) {
              return "Your passwords do no match";
            }
          },
        })}
        name="confirm_password"
        placeholder="Retype New Password"
        type="password"
      />
      {errors?.confirm_password && (
        <p className={classNames(commonErrorTextClassNames)}>
          {errors.confirm_password.message}
        </p>
      )}
      <div className="mt-10">
        <CheckBox
          handleChange={handleChange}
          isChecked={isChecked}
          label={"Remember this device"}
        />
      </div>
      <div className="mt-28">
        <Button htmlType="submit">Update Password</Button>
      </div>
    </form>
  );
};

ChangePasswordForm.defaultProps = {};
export default ChangePasswordForm;
