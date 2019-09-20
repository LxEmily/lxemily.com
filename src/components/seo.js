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

function SEO({ description, language, meta, title }) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={ site.siteMetadata.language }
      title={ site.siteMetadata.title }
      titleTemplate={ `%s | ${ site.siteMetadata.title }` }
      meta={[
        {
          name: `title`,
          content: site.siteMetadata.title
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords 
        },
        {
          name: `image`,
          content: siteImg 
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: siteImg
        },  
        {
          property: `og:locale`,
          content: site.siteMetadata.language
        },
        {
          itemProp: `name`,
          content: site.siteMetadata.title
        },
        {
          itemProp: `description`,
          content: site.siteMetadata.description
        },
        {
          itemProp: `image`,
          content: siteImg
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
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
        {
          name: `twitter:image`,
          content: siteImg
        },
        {
          name: `twitter:image:alt`,
          content: site.siteMetadata.title
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
}

export default SEO
