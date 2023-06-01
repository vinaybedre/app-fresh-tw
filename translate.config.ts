import type { Options } from "https://deno.land/x/localekit_fresh@0.5.0/mod.ts";

export default {
  selfURL: import.meta.url,
  languages: {
    en: {
      headers: {
        dashboard: "Dashboard",
        menus: "Menus",
        settings: "Settings",
      },
      common: {
        languages: {
          en: "En",
          es: "Spanish",
        },
      },
    },
    es: {
      common: {
        languages: {
          en: "Inglés",
          es: "Español",
        },
      },
    },
  },
  fetch_url: "/api/translation/{{lang}}",
} as unknown as Options;
