import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import Menu from "../components/Menu.vue"
import Admin from "../components/Admin"
import Login from "../components/Login"
import Register from "../components/Register"
import About from "../components/about/About"
import Content from "../components/about/Content"
import Delivery from "../components/about/Delivery"
import OrderinGuide from "../components/about/OrderinGuide"
import History from "../components/about/History"
import Phone from "../components/about/content/Phone"
import Person from "../components/about/content/Person"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'Home',
            components: {
                default: Home,
                "OrderinGuide": OrderinGuide,
                "Delivery": Delivery,
                "History": History
            }
        },
        {
            path: "/menu",
            name: "Menu",
            component: Menu
        },
        {
            path: "/admin",
            name: "Admin",
            component: Admin
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/about",
            name: "About",
            redirect: "/about/content",
            component: About,
            children: [{
                    path: "/about/content",
                    name: "Content",
                    redirect: "/person",
                    component: Content,
                    children: [{
                            path: "/phone",
                            name: "Phone",
                            component: Phone
                        },
                        {
                            path: "/person",
                            name: "Person",
                            component: Person
                        }
                    ]
                },
                {
                    path: "/history",
                    name: "History",
                    component: History
                },
                {
                    path: "/delivery",
                    name: "Delivery",
                    component: Delivery
                },
                {
                    path: "/orderinGuide",
                    name: "OrderinGuide",
                    component: OrderinGuide
                },
            ]
        },
        {
            path: "*",
            redirect: "/"
        }

    ]
})




// 路由全局守卫
// router.beforeEach((to, from, next) => {
//     //判断store.getters.isLogin === false
//     if (to.path == "/login" || to.path == "/register") {
//         next()
//     } else {
//         alert("还没登录,请先登录")
//         next("/login")
//     }
// })

// 后置钩子
// router.beforeEach((to, from) => {
//     alert("aaa")
// })

export default router