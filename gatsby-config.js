const config = require("./src/content/content.json")

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: config.meta.siteTitle,
    description: config.meta.siteDescription,
    author: config.meta.author,
    siteUrl: config.meta.siteUrl,
    language: config.meta.siteLanguage,
    keywords: config.meta.siteKeywords,
    social: {
      twitter: config.contact.handles.twitter,
      github: config.contact.handles.github,
      email: config.contact.handles.email,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: "github",
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`, //
        },
        fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
      },
    },
    `gatsby-plugin-robots-txt`,
    /* Gets data inside files
    (instead of just their node representation)
    Converts markdown into frontmatter + html */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: false,
              inlineCodeMarker: `±`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EmilyLiew`,
        short_name: `EmilyLiew`,
        start_url: `/`,
        background_color: `#23272A`,
        theme_color: `#23272A`,
        display: `minimal-ui`,
        icon: `src/images/plant.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.meta.googleAnalytics,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [config.meta.googleTag],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
