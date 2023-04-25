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
    <div>
        <NuxtImg :src="image"/>
        <div>
            <h3>{{ name }}</h3>
            <p>{{ status }}</p>
            <p>{{ species }}</p>
            <p>{{ location }}</p>
        </div>
    </div>
</template>

<style>

</style>