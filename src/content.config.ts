import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
	// Load Markdown and MDX files in the `src/content/portfolio/` directory.
	loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
		company: z.string().optional(),
		role: z.string().optional(),
		stack: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		postOrder: z.number(),
	}),
});

export const collections = { portfolio };
