import { defineCollection, z } from "astro:content";

const courses = defineCollection({
  schema: z.object({
    id: z.number(),
    img: z.string(),
    title: z.string(),
    sessions: z.array(z.number()),
  }),
});

export const collections = { courses };
