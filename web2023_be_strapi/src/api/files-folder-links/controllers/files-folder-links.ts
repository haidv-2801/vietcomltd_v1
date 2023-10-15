/**
 * A set of functions called "actions" for `files-folder-links`
 */

export default {
  filesFolderLinks: async (ctx, next) => {
    try {
      ctx.body = await ctx.getFilesFolderLinks();
    } catch (err) {
      ctx.body = err;
    }
  },
};
