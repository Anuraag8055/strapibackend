import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::site.site", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.entityService.findOne("api::site.site", id);

    return this.transformResponse(entity);
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedEntity = await strapi.entityService.update("api::site.site", id, {
      data,
    });

    return this.transformResponse(updatedEntity);
  },

  async delete(ctx) {
    const { id } = ctx.params;

    const deletedEntity = await strapi.entityService.delete("api::site.site", id);

    return this.transformResponse(deletedEntity);
  },
}));
