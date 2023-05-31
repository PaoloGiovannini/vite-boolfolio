import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';

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
                path: '/projects-list',
                name: 'projects-list',
                component: ProjectsList
            },

        ]
    }
);

export { router };