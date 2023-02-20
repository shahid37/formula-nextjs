import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import Button from "../Button";
import Input from "../Input";

interface FormValueProps {
  email: string;
  password: string;
}

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueProps>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const commonErrorClassNames = "border-red focus:border-red";
  const commonErrorTextClassNames = "text-red text-sm mt-1 font-medium";

  return (
    <div>
      <h6 className="text-gray mt-2">
        Enter an email associated with your account. We will send a recovery
        magic link.
      </h6>
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
        <div className="mt-24">
          <Button htmlType="submit">Send Email</Button>
        </div>
      </form>
    </div>
  );
};

ResetPasswordForm.defaultProps = {};
export default ResetPasswordForm;
