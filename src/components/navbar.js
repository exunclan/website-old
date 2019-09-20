import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 120, height: 45) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '3rem',
        }}
      >
        <div style={{ display: 'inline-block' }}>
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
        </div>

        <ul
          style={{
            listStyleType: 'none',
            marginBottom: 0,
          }}
        >
          <li
            style={{
              display: 'inline-block',
              margin: 0,
              marginRight: '2rem',
              padding: 0,
            }}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            style={{
              display: 'inline-block',
              margin: 0,
              marginRight: '2rem',
              padding: 0,
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )}
  />
);

export default Navbar;
