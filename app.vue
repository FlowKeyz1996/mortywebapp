<template>
  <div class="flex flex-wrap"> 

   <CharacterCard v-for="{id, name, image, status, species, location } in data.characters.results" 
   :id="id"
   :key="id" 
   :name="name" 
   :image="image" 
   :status="status"
   :species="species"
   :location="location.name"
   />

  </div>
</template>
<script lang="ts" setup>

type CharacterResults = {
  characters:{
    results: {
      id : string,
      name : string,
      image : string,
      status : string,
      species : string,
      location : {
        name : string
      }



    }[]
  }
}
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
const { data } = await useAsyncQuery <CharacterResults>( query)
</script>
