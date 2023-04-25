<script lang="ts" setup>
const props = defineProps ({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,

    },
    status: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex m-3 bg-gray-300 rounded-xl">
        <NuxtImg :src="image" width="200" height="200" class="rounded-xl"/>
        <div>
            <h3 class="text-xl">{{ name }}</h3>
            <p>Status{{ status }}</p>
            <p>Species:{{ species }}</p>
            <p>Location:{{ location }}</p>
        </div>
    </div>
</template>

<style>

</style>