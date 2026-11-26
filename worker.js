export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.coach2learn.ca") {
      url.hostname = "coach2learn.ca";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
