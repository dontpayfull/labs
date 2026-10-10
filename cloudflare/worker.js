// Serves www.dontpayfull.com/labs from GitHub Pages (repo dontpayfull/labs).
const ORIGIN = "https://dontpayfull.github.io";
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const upstream = await fetch(ORIGIN + url.pathname + url.search, {
      method: request.method === "HEAD" ? "HEAD" : "GET",
      redirect: "manual",
      cf: { cacheEverything: true, cacheTtl: 300 },
    });
    const headers = new Headers(upstream.headers);
    const loc = headers.get("location");
    if (loc) headers.set("location", loc.replace(ORIGIN, "https://www.dontpayfull.com"));
    for (const h of ["x-github-request-id", "x-fastly-request-id", "x-served-by", "x-cache", "x-cache-hits", "x-timer", "via", "x-proxy-cache"]) headers.delete(h);
    headers.set("cache-control", "public, max-age=300");
    return new Response(upstream.body, { status: upstream.status, headers });
  },
};
