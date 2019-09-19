module.exports = {
  siteMetadata: {
    title: `Emily Liew | Computer Science`,
    description: `Penultimate year Computer Science undergraduate at University College Dublin seeking internships for spring/summer 2020.`,
    author: `@lxemily`,
  },
  plugins: [
    `gatsby-plugin-slug`,
    `gatsby-plugin-react-helmet`,
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
            rel: "nofollow noopener noreferrer"
          }
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            noInlineHighlight: false,
            inlineCodeMarker: `±`, 
          },
        }
        ]
      }
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer 576344f02092eadf6c74a659f91b62cb431c8c58`, // ${process.env.GITHUB_TOKEN}
				},
				fetchOptions: {},
			},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
