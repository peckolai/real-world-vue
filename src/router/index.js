import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../components/EventDetails.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

const routes = [{
        path: '/',
        name: 'EventList',
        component: EventList,
    },
    {
        path: '/event/:id',
        name: 'EventDetails',
        props: true,
        component: EventDetails,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '*',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;