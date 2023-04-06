import AppLayout from "@/components/AppLayout/AppLayout";
import React from "react";
import QuestionnairePage from "./questionnaire";

const home = () => {
  return (
    <AppLayout showNaveLink={false}>
      <QuestionnairePage />
    </AppLayout>
  );
};

export default home;
