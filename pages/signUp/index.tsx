import React from "react";

import AppLayout from "@/components/AppLayout/AppLayout";
import Layout from "@/components/LoginLayout/layout";
import SignUpForm from "@/components/SignUpForm";

const SignUpPage = () => {
  return (
    <AppLayout showNaveLink={false}>
      {/* This Layout is for only Login section screens */}
      <Layout heading="Create Account">
        <SignUpForm />
      </Layout>
    </AppLayout>
  );
};

export default SignUpPage;
