import { z, defineCollection } from "astro:content";

const coffees = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      origin: z.string(),
      title: z.string(),
      price: z.number(),
      image_src: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      image_alt: z.string(),
    }),
});

export const collections = {
  coffees,
};
