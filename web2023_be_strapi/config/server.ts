import cronTasks from "./cron-task";

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://localhost:1337",
  app: {
    keys: env.array("APP_KEYS"),
  },
  cron: {
    enabled: false,
    tasks: cronTasks,
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  settings: {
    cors: {
      enabled: true,
      origin: "*",
      headers: "*",
      expose: [],
    },
  },
});
