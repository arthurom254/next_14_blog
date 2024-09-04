import Banner from '@/components/Banner'
import BlogsList from '@/components/BlogsList'
import Categories from '@/components/Categories'
import React from 'react'

export default function IndexPage() {
  return (
    <>
        <Banner/>
        <Categories/>
        <BlogsList/>
    </>
  )
}
