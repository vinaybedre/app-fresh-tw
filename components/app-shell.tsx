import { JSX } from "preact";
import { clsx } from "npm:clsx";

interface AppShellProps extends JSX.HTMLAttributes<HTMLDivElement> {
  route: string;
}

export function AppShell(props: AppShellProps) {
  const activeLinkClass = " bg-green-500 text-white hover:bg-green-600";
  const inactiveLinkClass = "bg-white text-green-600 hover:bg-green-50";

  clsx(
    props.route === "/dashboard" ? activeLinkClass : inactiveLinkClass,
    "mb-4 rounded-lg px-4 py-2"
  );

  return (
    <div>
      <div class="border-b-2 p-4 text-xl">
        <a href="/">Green Ginger</a>
      </div>
      <div class="grid grid-cols-12 content-around">
        <div class="col-span-2 h-screen border-r-2 text-center">
          <div class="grid grid-rows-3 p-4">
            <a
              class={clsx(
                props.route === "/dashboard"
                  ? activeLinkClass
                  : inactiveLinkClass,
                "mb-4 rounded-lg px-4 py-2"
              )}
              href="/dashboard"
              data-t-key="headers.dashboard"
            ></a>
            <a
              class={clsx(
                props.route === "/menus" ? activeLinkClass : inactiveLinkClass,
                "mb-4 rounded-lg px-4 py-2"
              )}
              href="/menus"
              data-t-key="headers.menus"
            ></a>
            <a
              class={clsx(
                props.route === "/settings"
                  ? activeLinkClass
                  : inactiveLinkClass,
                "mb-4 rounded-lg px-4 py-2"
              )}
              href="/settings"
              data-t-key="headers.settings"
            ></a>
          </div>
        </div>
        <div class="col-span-10 bg-blue-50 p-4">{props.children}</div>
      </div>
    </div>
  );
}
