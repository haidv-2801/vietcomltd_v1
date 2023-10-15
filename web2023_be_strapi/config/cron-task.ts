//background service
export default {
  myJob: {
    task: async ({ strapi }) => {
      /* Add your own logic here */
      console.log(`Task is Running Time=${new Date()}`);

      // try {
      //   const entry = await strapi.entityService.findMany(
      //     "api::aritcle.aritcle"
      //   );
      //   console.log(entry);
      // } catch (err) {
      //   console.error(err);
      // }
    },

    options: {
      rule: "* * 22 * * *", //chạy mỗi 5 giây
    },
  },
};
