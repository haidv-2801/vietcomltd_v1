/**
 * aritcle router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::aritcle.aritcle", {
  prefix: "",
  only: ["find", "findOne"],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findManyByCategorySlug: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findManyArticlesWithCustomSearch: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    create: {},
    update: {},
    delete: {},
  },
});
