import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFoundError from './pages/NotFoundError.vue'
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contact',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout
            },
            {
                path: '/project',
                name: 'project',
                component: ProjectsList
            },
            {
                path: '/project/:slug',
                name: 'single-project',
                component: SingleProject
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFoundError
            },

        ]
    }
);

export { router };