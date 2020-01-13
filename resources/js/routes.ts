
export const routes: any[] = [
    {
        path: "/register",
        component: require("./Pages/Register.vue").default,
        name: "register"
    },
    {
        path: "/login",
        component: require("./Pages/Login.vue").default,
        name: "login"
    },
    {
        path: "/dashboard",
        component: require("./Pages/Dashboard.vue").default,
        name: "dashboard"
    }
];
