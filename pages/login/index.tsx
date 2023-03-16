import Loader from "@/components/Loader";
import React, { useState } from "react";

import AppLayout from "../../components/AppLayout/AppLayout";
import LoginForm from "../../components/LoginForm/LoginForm";
import Layout from "../../components/LoginLayout/layout";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="relative">
      {loading && (
        <div className="absolute w-full h-screen z-10 bg-off-white bg-opacity-50">
          <Loader />
        </div>
      )}
      <AppLayout>
        {/* This Layout is for only Login section screens */}
        <Layout heading="Login">
          <LoginForm setLoading={setLoading} />
        </Layout>
      </AppLayout>
    </div>
  );
};

export default LoginPage;
