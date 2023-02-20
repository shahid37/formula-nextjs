import React from "react";

import Layout from "@/components/LoginLayout/layout";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import AppLayout from "@/components/AppLayout/AppLayout";

const ChangePasswordPage = () => {
  return (
    <AppLayout>
      {/* This Layout is for only Login section screens */}
      <Layout heading="Reset Password">
        <ResetPasswordForm />
      </Layout>
    </AppLayout>
  );
};

export default ChangePasswordPage;
