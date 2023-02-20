import React from "react";

import AppLayout from "@/components/AppLayout/AppLayout";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import Layout from "@/components/LoginLayout/layout";

const ChangePasswordPage = () => {
  return (
    <AppLayout>
      <Layout heading="Change Password">
        <ChangePasswordForm />
      </Layout>
    </AppLayout>
  );
};

export default ChangePasswordPage;
