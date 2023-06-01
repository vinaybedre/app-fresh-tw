import { Head } from "$fresh/runtime.ts";
import { PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { AppShell } from "../components/app-shell.tsx";

export default function Dashboard(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <AppShell route={props.route}>Dashboard - {props.route}</AppShell>
    </>
  );
}
