import { createRouter, createWebHistory } from "vue-router";

// views
import Index from '../views/Index.vue';
import Songs from '../views/Songs.vue';
import Albums from '../views/Albums.vue';


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
    },
    {
        path:"/albums",
        name:"Albums",
        component:Albums
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;