export default [
  {
    path: "/plan",
    component: () => import("./Layout.vue"),
    children: [
      {
        path: "",
        name: "plans.index",
        component: () => import("./Index.vue")
      }
    ]
  }
];
