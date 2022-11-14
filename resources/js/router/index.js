import Vue from 'vue';
import vueRouter from 'vue-router';

//import all pages,components and views
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../views/About";

// const Login = () => import('../views/Dashboard.vue')
// const Home = () => import('../views/Dashboard.vue')
const Dashboard = () => import('../views/Dashboard.vue')
const UserProfile = () => import('../views/user/Profile.vue')
const UserIndex = () => import('../views/user/Index.vue')
const UserCreate = () => import('../views/user/Create.vue')
const UserEdit = () => import('../views/user/Edit.vue')

Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'web',
            redirect:'/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from,next) => {
                // reject the navigation
                if (localStorage.getItem('token')){
                    next('/home')
                }
                next();

            },
        },
        {
            path: '/home',
            component:Home,
            beforeEnter: (to, from,next) => {
                if (localStorage.getItem('token')){
                    next();
                }else {
                    next('/login')
                }

            },
            children:[
                {
                    path:'',
                    name:'dashboard',
                    meta:{title:'dashboard'},
                    component: Dashboard
                },
                {
                    path:'user',
                    name:'user',
                    meta:{title:'user'},
                    component: UserIndex
                },
                {
                    path:'create-user',
                    name:'create-user',
                    meta:{title:'Create user'},
                    component: UserCreate
                },
                {
                    path:'edit-user/:id',
                    name:'edit-user',
                    meta:{title:'Edit user'},
                    component: UserEdit
                },
                {
                    path:'profile',
                    name:'profile',
                    meta:{title:'profile'},
                    component: UserProfile
                },

            ],

        },
    ]
});

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;