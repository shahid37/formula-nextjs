import Main from "@/components/Main";
import Head from "next/head";
import LoginPage from "./login";

export default function Home() {
  return (
    <div className="bg-off-white">
      <LoginPage />
    </div>
  );
}
