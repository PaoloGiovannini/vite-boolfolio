<template>
    <div class="card">
        <img v-if="project.image" :src="`${this.store.url}/storage/${project.image}`" class="card-img-top">
        <h3 v-else class="text-center">Nessuna foto</h3>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
            <h5>{{project.type?.name}}</h5>
            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">
                Vedi
            </router-link>
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    export default {
        name: "ProjectCard",
        data(){
            return{
                store
            }
        },
        props: ['project']
    }
</script>