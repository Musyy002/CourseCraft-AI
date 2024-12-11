import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url: "postgresql://neondb_owner:mnyQTSZx8oL4@ep-fragrant-paper-a1wml9dj.ap-southeast-1.aws.neon.tech/AI_Course_Generator?sslmode=require",
  }
});
