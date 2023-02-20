import AppLayout from "@/components/AppLayout/AppLayout";
import LandingPage from "@/components/Questionnaries/LandingPage";
import React from "react";

const home = () => {
  return (
    <AppLayout>
      <LandingPage />
    </AppLayout>
  );
};

export default home;
