import {createRouter, createWebHistory} from 'vue-router'
import {getAuth} from "firebase/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import("./components/home.vue")},
        {path: "/register", component: () => import("./components/register.vue")},
        {path: "/signup", component: () => import("./components/signup.vue")},
        {
            path: "/feed", component: () => import("./components/feed.vue"),
            meta: {
                requiresAuth: true,

            },
        },
    ],

});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth) ){
        if (getAuth().currentUser) {
            next();
        }
        else {
            alert("you don't have access ")
            next("/");
        }
    } else {
        next();
    }
})
export default router;