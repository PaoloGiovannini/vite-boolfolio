<template>
    <div class="container">
        <div class="row">
            <div class="col-4 py-2" v-for="project in projects">
                <ProjectCard 
                :project="project"
                />
            </div>

        </div>
        <ul class="pagination">
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
            <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
        </ul>
    </div>

</template>

<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';
    import { store } from '../store.js';

    export default{
        name: "ProjectsList",
        components:{
            ProjectCard
        },
        data(){
            return{
                projects: [],
                url: 'http://localhost:8000',
                currentPage: 1,
                lastPage:null,
                store
            }
        },
        methods:{
            getProjects(changePage){
                axios.get(`${this.store.url}/api/projects`,
                {
                    params:{
                        page:changePage
                    }
                }
                )
                .then(response =>{
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                });

            }
        },
        mounted(){
            this.getProjects(1);
        }
    }
</script>