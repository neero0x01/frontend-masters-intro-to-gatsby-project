import { Link } from 'gatsby';
import React from 'react'
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About this site"
        description="More information about this site" />
      <div>
        <h1>About</h1>
        <p>
          This is the about page.
        </p>
        <Link to="/">
          Back to home page
        </Link>
      </div>
    </>
  );
}
