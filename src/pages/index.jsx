import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  query getSiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  const meta = data?.site?.siteMetadata
  return (
    <>
      <header>
        <h1>{meta?.title}</h1>
      </header>
      <main>
        <h1>Hello Gatsby</h1>
        <Link to="/about">
          About us
        </Link>
      </main>
    </>
  )
}
