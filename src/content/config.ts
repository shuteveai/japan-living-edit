import { defineCollection, z } from 'astro:content';

const articleCategories = ['Organize', 'Small Spaces', 'Kitchen', 'Coffee'] as const;

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(articleCategories),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    affiliateDisclosure: z.string(),
    heroImage: z.string().optional(),
    canonicalURL: z.string().url().optional(),
  }),
});

export const collections = { articles };
