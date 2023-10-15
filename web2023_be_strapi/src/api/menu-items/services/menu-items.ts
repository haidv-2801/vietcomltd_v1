module.exports = {
  getMenus: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("api::menus.menus", {
        fields: ["id", "title", "slug"],
      });

      return entries;
    } catch (err) {
      return err;
    }
  },
};
