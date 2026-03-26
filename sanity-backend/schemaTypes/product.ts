import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // Listing card fields
    defineField({
      name: 'listingDescription',
      title: 'Listing Description',
      description: 'Short description shown on the products listing page card',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listingImage',
      title: 'Listing Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Page banner fields
    defineField({
      name: 'bannerOutlinedText',
      title: 'Banner Outlined Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerSolidText',
      title: 'Banner Solid Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Banner Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Detail section fields
    defineField({
      name: 'detailOutlinedText',
      title: 'Detail Section Outlined Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailSolidText',
      title: 'Detail Section Solid Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'detailImage',
      title: 'Detail Section Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Product types section
    defineField({
      name: 'typesOutlinedText',
      title: 'Types Section Outlined Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'typesSolidText',
      title: 'Types Section Solid Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'types',
      title: 'Product Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        },
      ],
    }),

    // Specifications section
    defineField({
      name: 'specificationsOutlinedText',
      title: 'Specifications Section Outlined Text',
      type: 'string',
    }),
    defineField({
      name: 'specificationsSolidText',
      title: 'Specifications Section Solid Text',
      type: 'string',
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      description: 'Optional specifications table. Leave empty to hide this section.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'feature', title: 'Feature', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'feature', subtitle: 'description' },
          },
        },
      ],
    }),

    // Features section
    defineField({
      name: 'featuresImage',
      title: 'Features Section Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Gallery
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),

    // CTA section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),

    // Ordering
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Controls the order products appear on the listing page',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'listingImage',
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
