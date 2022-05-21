import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import notFoundPage from "@/pages/NotFoundPage";
import {site} from "@/_config";

const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
                meta: {
                    title: "Главная"
                }
            },
            {
                path: "/about",
                name: "about",
                component: AboutPage,
                meta: {
                    title: "О Проекте"
                }

            },
            {
                path: "/404",
                name: "notFound",
                component: notFoundPage,
                meta: {
                    title: "Страница не найдена"
                }
            },
            {
                path: "/:CatchAll(.*)",
                redirect: "/404"
            },

        ]
    }
)

routers.beforeEach((to,from, next) => {
    document.title = `${site.title} - ${to.meta.title}`;
    next();
})

export default routers;