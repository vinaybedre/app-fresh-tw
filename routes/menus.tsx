import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { AppShell } from "../components/app-shell.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const kv = await Deno.openKv();

    kv.set(["users"], "vinaybedre@gmail.com");

    const { value } = await kv.get(["users"]);

    return ctx.render(value);
  },
};

export default function Menus(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <AppShell route={props.route}>{props.data}</AppShell>
    </>
  );
}
