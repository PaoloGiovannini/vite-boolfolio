<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <img v-if="project.image" :src="`${this.store.url}/storage/${project.image}`" class="card-img-top">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <h5>{{project.type?.name}}</h5>
                    </div>
                </div>
            </div>
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
        console.log(slug)
        axios.get(`${this.store.url}/api/project/${slug}`)
        .then(response =>{
            this.project = response.data.project;
            console.log(this.project)
        })
    }
}
</script>