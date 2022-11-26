import Vue from 'vue';
import vueRouter from 'vue-router';

//import all pages,components and views
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../views/About";

// const Login = () => import('../views/Dashboard.vue')
// const Home = () => import('../views/Dashboard.vue')
const Dashboard = () => import('../views/Dashboard.vue')

//user components
const UserProfile = () => import('../views/user/Profile.vue')
const UserIndex = () => import('../views/user/Index.vue')
const UserCreate = () => import('../views/user/Create.vue')
const UserEdit = () => import('../views/user/Edit.vue')

//category components
const CategoryIndex = () => import('../views/category/Index.vue')
const CategoryCreate = () => import('../views/category/Create.vue')
const CategoryEdit = () => import('../views/category/Edit.vue')

//brand components
const BrandIndex = () => import('../views/brand/Index.vue')
const BrandCreate = () => import('../views/brand/Create.vue')
const BrandEdit = () => import('../views/brand/Edit.vue')

//product components
const ProductIndex = () => import('../views/product/Index.vue')
const ProductCreate = () => import('../views/product/Create.vue')
const ProductEdit = () => import('../views/product/Edit.vue')

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
                {
                    path:'category',
                    name:'category',
                    meta:{title:'category'},
                    component: CategoryIndex
                },
                {
                    path:'create-category',
                    name:'create-category',
                    meta:{title:'Create category'},
                    component: CategoryCreate
                },
                {
                    path:'edit-category/:id',
                    name:'edit-category',
                    meta:{title:'Edit category'},
                    component: CategoryEdit
                },
                {
                    path:'brand',
                    name:'brand',
                    meta:{title:'brand'},
                    component: BrandIndex
                },
                {
                    path:'create-brand',
                    name:'create-brand',
                    meta:{title:'Create brand'},
                    component: BrandCreate
                },
                {
                    path:'edit-brand/:id',
                    name:'edit-brand',
                    meta:{title:'Edit brand'},
                    component: BrandEdit
                },
                {
                    path:'product',
                    name:'product',
                    meta:{title:'product'},
                    component: ProductIndex
                },
                {
                    path:'create-product',
                    name:'create-product',
                    meta:{title:'Create product'},
                    component: ProductCreate
                },
                {
                    path:'edit-product/:id',
                    name:'edit-product',
                    meta:{title:'Edit product'},
                    component: ProductEdit
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
