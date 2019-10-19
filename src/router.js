import Vue from 'vue'
import Router from 'vue-router'
import Wing from '.views/Wing.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/wing',
            name: 'wing',
            component: Home,
        },
    ]
});

export default router;