import LoginForm from "@/components/LoginForm";
import Layout from "@/components/LoginLayout/layout";
import React from "react";

const LoginPage = () => {
  return (
    <Layout heading="Login">
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
