import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// Monkey-patch fetch to log GitHub token responses
const originalFetch = global.fetch;
global.fetch = async function (input: RequestInfo | URL, init?: RequestInit) {
  const url = typeof input === "string" ? input : input.toString();
  const result = await originalFetch(input, init);
  if (url.includes("github.com/login/oauth/access_token")) {
    const cloned = result.clone();
    const body = await cloned.text();
    console.log("[GitHub token response] status:", result.status);
    console.log("[GitHub token response] body:", body);
  }
  return result;
};

const handler = makeRouteHandler({ config });

export async function GET(request: Request) {
  return handler.GET(request);
}

export async function POST(request: Request) {
  return handler.POST(request);
}
