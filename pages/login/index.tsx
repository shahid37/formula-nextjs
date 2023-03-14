import React, { useContext } from "react";

import AppLayout from "../../components/AppLayout/AppLayout";
import LoginForm from "../../components/LoginForm/LoginForm";
import Layout from "../../components/LoginLayout/layout";

const LoginPage = ({ auth, setAuth }: any) => {
  return (
    <AppLayout>
      {/* This Layout is for only Login section screens */}
      <Layout heading="Login">
        <LoginForm auth={auth} setAuth={setAuth} />
      </Layout>
    </AppLayout>
  );
};

export default LoginPage;
