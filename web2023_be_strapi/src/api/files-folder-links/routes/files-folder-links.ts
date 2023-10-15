export default {
  routes: [
    {
      method: "GET",
      path: "/files-folder-links",
      handler: "files-folder-links.filesFolderLinks",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
