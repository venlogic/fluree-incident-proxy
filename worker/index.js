export default {
  async fetch(request, env, ctx) {
    return new Response("Fluree incident proxy worker is alive!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};