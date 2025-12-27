import { defineCollection, z } from 'astro:content';

const concepts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        publishDate: z.date().optional(), // New field for sorting
        related: z.array(z.string()).optional(), // List of slugs
    }),
});

export const collections = {
    concepts,
};
