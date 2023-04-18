// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],


    apollo: {
          clients: {
            default: {
              httpEndpoint: 'https://rickandmortyapi.com/graphql'
        }
      },
    },

   image: {
    domains: ['rickandmortyapi.com/']
   }
})
