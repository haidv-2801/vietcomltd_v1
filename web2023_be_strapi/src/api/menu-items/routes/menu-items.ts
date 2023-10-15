export default {
  routes: [
    {
      method: "GET",
      path: "/menu-items",
      handler: "menu-items.getMenuItems",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
