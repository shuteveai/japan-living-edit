import { defineCollection, z } from 'astro:content';

const articleCategories = [
  'Organize',
  'Small Spaces',
  'Kitchen',
  'Coffee',
  'Everyday Essentials',
] as const;

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        seoTitle: z.string().optional(),
        description: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date().optional(),
        category: z.enum(articleCategories),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        affiliateDisclosure: z.string(),
        heroImage: image().optional(),
        heroImageAlt: z.string().optional(),
        canonicalURL: z.string().url().optional(),
      })
      .superRefine((data, ctx) => {
        if (data.heroImage && !data.heroImageAlt?.trim()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'heroImageAlt is required when heroImage is present.',
            path: ['heroImageAlt'],
          });
        }
      }),
});

export const collections = { articles };
