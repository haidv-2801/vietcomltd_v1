const getMenuItems1Service = require("../services/menu-items"); // đường dẫn tới file service của bạn

/**
 * A set of functions called "actions" for `menu-items`
 */

export default {
  getMenuItems: async (ctx) => {
    try {
      const data = await strapi
        .service("api::menu-items.menu-items")
        .getMenuItems();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Menu items controller error", { moreDetails: err });
    }
  },
};
