/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import languagePlugin from "https://deno.land/x/localekit_fresh@0.5.0/mod.ts";
import languageConfig from "./translate.config.ts";

await start(manifest, {
  plugins: [twindPlugin(twindConfig), languagePlugin({ ...languageConfig })],
});
