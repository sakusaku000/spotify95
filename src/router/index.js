import { createRouter, createWebHistory } from "vue-router";

// views
import Index from '../views/Index.vue';
import Songs from '../views/Songs.vue';


const routes = [
    {
        path:"/",
        name:"Index",
        component:Index
    },
    {
        path:"/songs",
        name:"Songs",
        component:Songs
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;