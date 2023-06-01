import { Head } from "$fresh/runtime.ts";
import { AppShell } from "../components/app-shell.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <AppShell>Welcome</AppShell>
    </>
  );
}
