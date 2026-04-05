import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const handler = makeRouteHandler({ config });

export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.pathname.includes("oauth/callback")) {
    console.log("[Keystatic callback] params:", url.searchParams.toString());
    console.log("[Keystatic callback] KEYSTATIC_GITHUB_CLIENT_ID exists:", !!process.env.KEYSTATIC_GITHUB_CLIENT_ID);
    console.log("[Keystatic callback] KEYSTATIC_GITHUB_CLIENT_SECRET exists:", !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET);
    console.log("[Keystatic callback] KEYSTATIC_SECRET exists:", !!process.env.KEYSTATIC_SECRET);
    console.log("[Keystatic callback] KEYSTATIC_SECRET length:", process.env.KEYSTATIC_SECRET?.length);
  }
  return handler.GET(request);
}

export async function POST(request: Request) {
  return handler.POST(request);
}
