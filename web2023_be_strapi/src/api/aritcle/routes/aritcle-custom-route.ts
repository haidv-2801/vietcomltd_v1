export default {
  routes: [
    {
      method: "GET",
      path: "/aritcle/category/:id",
      handler: "aritcle.findManyByCategorySlug",
    },
    {
      method: "POST",
      path: "/articles/search",
      handler: "aritcle.findManyArticlesWithCustomSearch",
    },
    {
      method: "POST",
      path: "/search",
      handler: "aritcle.search",
    },
  ],
};
