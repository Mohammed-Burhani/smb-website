import { groq } from 'next-sanity'

// For the products listing page — only fields needed for the card
export const productsListQuery = groq`
  *[_type == "product"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    listingDescription,
    listingImage,
  }
`

// For the product detail page — full document by slug
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    bannerOutlinedText,
    bannerSolidText,
    bannerSubtitle,
    bannerImage,
    detailOutlinedText,
    detailSolidText,
    description,
    detailImage,
    typesOutlinedText,
    typesSolidText,
    types[] {
      title,
      description,
      image,
    },
    featuresImage,
    features,
    galleryImages,
    ctaTitle,
    ctaDescription,
  }
`

// For generateStaticParams — slugs only
export const productSlugsQuery = groq`
  *[_type == "product"] { "slug": slug.current }
`
