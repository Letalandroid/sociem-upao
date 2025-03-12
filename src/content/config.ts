import { defineCollection, z } from "astro:content";

const courses = defineCollection({
  schema: z.object({
    img: z.string(),
    title: z.string(),
  }),
});

export const collections = { courses };
