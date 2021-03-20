import Vue from "vue";
import Router from 'vue-router';
import Index from "@/components/dashboard/Index.vue";
import Home from "@/components/dashboard/page/Home.vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: Index,
        children: [
            {
                path: '',
                component: Home,
            }
        ]
    }]
})

router.beforeEach((to, from, next) => {
    next();
})

export default router;
