import { Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
    <Layout
      title="About this site"
      description="More information about this site">
      <h1>About</h1>
        <p>
          This is the about page.
        </p>
        <Link to="/">
          Back to home page
        </Link>
    </Layout>
    </>
  );
}
