import AppLayout from "@/components/AppLayout/AppLayout";
import LandingPage from "@/components/Questionnaries/LandingPage";
import { useRouter } from "next/router";
import React from "react";

const HomePage = () => {
 const router = useRouter();
 const onClick = () => {
   router.push("/questionnaries");
 };  
  return (
    <AppLayout navLinkAction={onClick}>
      <LandingPage />
    </AppLayout>
  );
};

export default HomePage;
