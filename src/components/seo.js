/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import siteImg from "../images/website.png"

function SEO({ description, image, meta, title, url, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            language
            social {
              github
              twitter
              email
            }
          }
        }
      }
    `
  )

  // use specific metadata passed into this component, or the default one if none is passed
  const desc = description || site.siteMetadata.description
  const img = image || siteImg
  const name = title + " | " + site.siteMetadata.title
  const link = site.siteMetadata.siteUrl + url || site.siteMetadata.siteUrl
  const contentType = type || `website`

  return (
    <Helmet
      htmlAttributes={ site.siteMetadata.language }
      title={ name }
      // titleTemplate={ `%s | ${ site.siteMetadata.title }` }
      meta={[
        {
          name: `description`,
          content: desc,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords 
        },
        {
          name: `image`,
          content: img 
        },
        {
          property: `og:url`,
          content: link
        },
        {
          property: `og:title`,
          content: name,
        },
        {
          property: `og:description`,
          content: desc,
        },
        {
          property: `og:type`,
          content: contentType,
        },
        {
          property: `og:site_name`,
          content: name,
        },
        {
          property: `og:image`,
          content: img
        },  
        {
          property: `og:locale`,
          content: site.siteMetadata.language
        },
        {
          itemProp: `name`,
          content: name
        },
        {
          itemProp: `description`,
          content: desc
        },
        {
          itemProp: `image`,
          content: img
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: name,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:url`,
          content: link
        },
        {
          name: `twitter:description`,
          content: desc,
        },
        {
          name: `twitter:image`,
          content: img
        },
        {
          name: `twitter:image:alt`,
          content: name
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  language: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SEO