export default defineNuxtConfig({
    modules: [
    'nuxt-mongoose',
  ], 
  mongoose: {
    uri: process.env.NUXT_MONGOOSE_URI,
    options: {},
    modelsDir: 'models',
  },
})