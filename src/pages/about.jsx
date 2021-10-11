import { Link } from 'gatsby';
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is the about page.
      </p>
      <Link to="/">
        Back to home page
      </Link>
    </div>
  );
}
