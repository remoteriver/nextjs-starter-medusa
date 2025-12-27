import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Categories from "@modules/home/components/categories"
import Features from "@modules/home/components/features"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Teapoz - Premium Tea Store",
  description:
    "Discover our premium collection of teas, elegantly packed and sourced from the finest gardens.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Categories />
      <Features />
      <FeaturedProducts collections={collections} region={region} />
    </>
  )
}
