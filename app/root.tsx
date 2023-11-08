import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  // ...
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
