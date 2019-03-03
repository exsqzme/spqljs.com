import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    css={{
      height: '50px',
      boxShadow: 'inset 0 -1px 0 0px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      top: '0',
      width: '100%',
      background: '#fff'
    }}
  >
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0 1rem`,
        height: `100%`    
      }}
    >
      <Link
        to="/"
        style={{
          color: '#ff7e5f',
          textDecoration: `none`,
          fontSize: '33px'
        }}
      >
        {siteTitle}
      </Link>
      <nav
        css={{
          display: 'inline-block',
          flex: '1'
        }}
      >
        <ul
          css={{
            listStyle: 'none',
            margin: '0',
            display: 'flex'
          }}
        >
          <li
            css={{

            }}
          >
            <Link 
              to="/getting-started"
              css={{
                textDecoration: 'none',
                color: '#282936',
                '&:hover': {
                  color: '#ff7e5f',
                  opacity: '.8'
                },
                margin: '0 1.5em',
                fontSize: '20px'
              }}
              activeStyle={{color: '#ff7e5f'}}
            >
              Getting Started
            </Link>
          </li>
          <li css={{
         
          }}>
            <Link 
              to="/docs"
              css={{
                textDecoration: 'none',
                color: '#282936',
                '&:hover': {
                  color: '#ff7e5f',
                  opacity: '.8'
                },
                flex: '1',
                fontSize: '20px'
              }}
              activeStyle={{color: '#ff7e5f'}}
            >
              Docs
            </Link>            
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
