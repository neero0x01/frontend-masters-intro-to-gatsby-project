import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Seo from './Seo'

export default function Layout({ children, title=false, description=false, image=false, path=false }) {
  const data = useStaticQuery(graphql`
  query getSiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  const meta = data?.site?.siteMetaData ?? {}

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        { children }
      </main>
    </>
  )

}
