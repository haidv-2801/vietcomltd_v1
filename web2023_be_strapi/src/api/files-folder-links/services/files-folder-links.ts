module.exports = {
  getFilesFolderLinks: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::files_folder_links.files_folder_links",
        {
          fields: ["id", "file_id", "folder_id", "file_order"],
        }
      );

      return entries;
    } catch (err) {
      return err;
    }
  },
};
