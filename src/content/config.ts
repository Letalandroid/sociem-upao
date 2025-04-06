import { defineCollection, z } from "astro:content";

const courses = defineCollection({
  schema: z.object({
    id: z.number(),
    img: z.string(),
    title: z.string(),
    sessionTitles:z.array(z.string()),
    sessions: z.array(z.number()),
  }),
});

const sessions = defineCollection({
  schema: z.object({
    id: z.number(),
    img: z.string(),
    course: z.string(),
    video: z.string()
  })
})

export const collections = { courses, sessions };
