<template>
    <div class="container">
        <img v-if="project.image" :src="`${this.store.url}/storage/${project.image}`">
        <div class="border">
            <h5>{{ project.title }}</h5>
            <p>{{ project.content }}</p>
            <h5>{{ project.type?.name }}</h5>
        </div>

    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: "SingleProject",
    data() {
        return {
            store,
            project: []
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.url}/api/project/${slug}`)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.project;
                } else {
                    this.$router.push({ name: 'not-found' })
                }


            })
    }
}
</script>