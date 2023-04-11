import React from "react";
import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout/AppLayout";
import LandingPage from "@/components/Questionnaries/LandingPage";
import usePersistentState from "@/hooks/usePersistentState";

const HomePage = () => {
 const router = useRouter();
  const [isCreateQuestion, setIsCreateQuestion] = usePersistentState(
    "isCreateQuestion",
    false,
  );
  const [currentQuestion, setCurrentQuestion] = usePersistentState(
    "currentQuestion",
    0
  );

  const onClick = () => {
    setIsCreateQuestion(false);
    localStorage.setItem("questionData",'');
    setCurrentQuestion(0);
    router.push("/questionnaries");
  };
  return (
    <AppLayout navLinkAction={onClick}>
      <LandingPage />
    </AppLayout>
  );
};

export default HomePage;
