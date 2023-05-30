<template>
    <div class="card">
        <img v-if="image" :src="`${this.url}/storage/${image}`" class="card-img-top">
        <h3 v-else class="text-center">Nessuna foto</h3>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <h5>{{type}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        content:String,
        image:String,
        url:String,
        type:String
    }
}
</script>