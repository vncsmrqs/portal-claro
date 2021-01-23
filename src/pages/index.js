import planRoute from "./plan/routes";

export default [
  {
    path: "/",
    component: () => import("./Layout.vue"),
    children: [...planRoute]
  },
  {
    path: "*",
    component: () => import("./errors/NotFound.vue")
  }
];
