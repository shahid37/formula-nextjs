import AppLayout from "@/components/AppLayout/AppLayout";
import Main from "@/components/Main";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const onClick = ()=>{
    router.push("/questionnaries/home");
  }
  return (
    <AppLayout navLinkAction={onClick}>
      <Main />
    </AppLayout>
  );
}
