<template>
  <p class="text-xl">{{ data }}</p>
</template>
<script lang="ts" setup>
const query = gql`
  query getCharacter{
    characters {
      results{
        name
        image
        status
        id
        species
        location{
          name
        }
      }
    
    }
  }
`
const { data } = await useAsyncQuery(query)
</script>
