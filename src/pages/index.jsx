import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <h1>Hello Gatsby</h1>
        <Link to="/about">
          About us
        </Link>
      </Layout>
    </>
  )
}
