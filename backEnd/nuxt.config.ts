export default defineNuxtConfig({
  modules: ["nuxt-mongoose"],
  mongoose: {
    uri: process.env.NUXT_MONGOOSE_URI,
    options: {},
    modelsDir: "models",
  },
  nitro: {
    storage: {
      uploads: {
        driver: "fs",
        base: "./public/uploads",
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
});
