import { createRouter, createWebHistory } from "vue-router";

// views
import Songs from '../views/Songs.vue';


const routes = [
    {
        path:"/:pathMatch(.*)*",
        name:"Not found",
        redirect:"/songs"
    },
    {
        path:"/songs",
        name:"Songs - Spotify-95",
        component:Songs
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;