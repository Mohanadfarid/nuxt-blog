// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  extends: ["./backEnd", "./core"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-auth-utils",
  ],
});