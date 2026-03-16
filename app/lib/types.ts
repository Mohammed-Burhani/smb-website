import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityProductListItem {
  _id: string
  title: string
  slug: string
  listingDescription: string
  listingImage: SanityImageSource
}

export interface SanityProductType {
  title: string
  description: string
  image: SanityImageSource
}

export interface SanityProduct {
  _id: string
  title: string
  slug: string
  bannerOutlinedText: string
  bannerSolidText: string
  bannerSubtitle: string
  bannerImage: SanityImageSource
  detailOutlinedText: string
  detailSolidText: string
  description: string[]
  detailImage: SanityImageSource
  typesOutlinedText: string
  typesSolidText: string
  types: SanityProductType[]
  featuresImage: SanityImageSource
  features: string[]
  galleryImages: SanityImageSource[]
  ctaTitle: string
  ctaDescription: string
}
