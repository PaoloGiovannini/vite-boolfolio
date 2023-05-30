<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <ProjectCard 
                :title="project.title"
                :content="project.content"
                :image="project.image"
                :url="url"
                :type="project.type?.name"
                />
            </div>

        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import ProjectCard from './ProjectCard.vue';

    export default{
        name: "AppMain",
        components:{
            ProjectCard
        },
        data(){
            return{
                projects: [],
                url: 'http://localhost:8000',
            }
        },
        methods:{
            getProjects(){
                axios.get(`${this.url}/api/projects`)
                .then(response =>{
                    console.log(response);
                    this.projects = response.data.results;
                    console.log(this.projects)
                });

            }
        },
        mounted(){
            this.getProjects();
        }
    }
</script>