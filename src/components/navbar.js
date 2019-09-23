import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styles from './navbar.module.css';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Members',
    href: '/members',
  },
  {
    title: 'Alumni',
    href: '/alumni',
  },
  {
    title: 'Faculty',
    href: '/faculty',
  },
  {
    title: 'Archive',
    href: '/archive',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'ln(exun)',
    href: '//lnexun.com',
    external: true,
  },
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  }

  render() {
    const { active } = this.state;
    return (
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
          <nav className={styles.wrapper}>
            <Link to="/" style={{ lineHeight: 0 }}>
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
            <button
              type="button"
              className={styles.hamburger}
              onClick={this.toggle}
            >
              ☰
            </button>
            <div
              className={[styles.nav, active ? styles.navActive : null].join(
                ' '
              )}
            >
              <button
                type="button"
                className={styles.cross}
                onClick={this.toggle}
              >
                ✕
              </button>
              <ul className={styles.links}>
                {links.map(link => (
                  <li className={styles.linksItem} key={link.href}>
                    {link.external ? (
                      <a href={link.href}>{link.title}</a>
                    ) : (
                      <Link to={link.href}>{link.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      />
    );
  }
}

export default Navbar;
