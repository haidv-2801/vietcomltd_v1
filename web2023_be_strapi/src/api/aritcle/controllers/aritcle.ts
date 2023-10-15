/**
 * aritcle controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::aritcle.aritcle",
  ({ strapi }) => ({
    /**
     * Override lại find one thay vì tìm bằng id thì tìm bằng slug
     * @param ctx
     * @returns
     */
    async findOne(ctx: any) {
      const { id } = ctx.params;

      const {
        query: { locale },
      } = ctx.request;

      const entity = await strapi.db.query("api::aritcle.aritcle").findOne({
        where: {
          slug: id,
        },
        populate: ["category", "admin_user", "seo", "createdBy"],
      });

      if (entity) {
        await strapi.db.query("api::aritcle.aritcle").update({
          where: {
            slug: id,
            locale,
          },
          data: {
            views: parseInt(entity.views ?? "0") + 1,
          },
        });
      }
      const sanitizeEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizeEntity);
    },

    /**
     * Tìm theo category slug
     */
    async findManyByCategorySlug(ctx: any) {
      const { id } = ctx.params;
      const {
        query: { locale },
      } = ctx.request;

      const category = await strapi.db.query("api::category.category").findOne({
        where: {
          slug: id,
        },
        populate: ["aritcles"],
      });

      if (!category) {
        return this.transformResponse(await this.sanitizeOutput(category, ctx));
      }

      const articleIds = category?.aritcles?.map((f) => f.id);

      const entites = await strapi.db.query("api::aritcle.aritcle").findMany({
        where: {
          $and: [
            {
              id: {
                $in: articleIds,
              },
              locale: {
                $eq: locale,
              },
            },
          ],
        },
        orderBy: [
          {
            order: "asc",
          },
          {
            publishedAt: "desc",
          },
        ],
        populate: ["category", "admin_user", "image"],
      });

      const sanitizeEntity = await this.sanitizeOutput(entites, ctx);
      return this.transformResponse(sanitizeEntity);
    },

    /**
     * Tìm nhiều với custom search
     */
    async findManyArticlesWithCustomSearch(ctx: any) {
      const {
        query: { s },
        body,
      } = ctx.request;

      const entites = await strapi.db
        .query("api::aritcle.aritcle")
        .findMany(body);

      const sanitizeEntity = await this.sanitizeOutput(entites, ctx);
      return this.transformResponse(sanitizeEntity);
    },

    /**
     * Tìm nhiều
     */
    async search(ctx: any) {
      const {
        query: { s },
        body,
      } = ctx.request;
      const { schema, query } = body;
      const entites = await strapi.db.query(schema).findMany(query);

      const sanitizeEntity = await this.sanitizeOutput(entites, ctx);
      return this.transformResponse(sanitizeEntity);
    },
  })
);
