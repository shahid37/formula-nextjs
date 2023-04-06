import AppLayout from "@/components/AppLayout/AppLayout";
import LandingPage from "@/components/Questionnaries/LandingPage";
import React from "react";
import QuestionnairePage from "./questionnaire";

const home = () => {
  return (
    <AppLayout>
      {/* <LandingPage /> */}
      <QuestionnairePage />
    </AppLayout>
  );
};

export default home;
