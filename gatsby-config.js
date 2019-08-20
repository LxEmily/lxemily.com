module.exports = {
  siteMetadata: {
    title: `Testing Gatsby`,
    description: `Self explanatory.`,
    author: `@lxemily`,
  },
  plugins: [
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
    `gatsby-transformer-remark`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer 576344f02092eadf6c74a659f91b62cb431c8c58`
        },
        queries: [
          `{
            user(login: "lxemily") {
              repositories(first: 100, ownerAffiliations: [OWNER], 
                orderBy: {field:UPDATED_AT, direction: DESC}) {
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      shortDescriptionHTML
                      homepageUrl
                      url
                      updatedAt
                      repositoryTopics(first: 10) {
                        edges {
                          node {
                            topic {
                              name
                            }
                          }
                        }
                      }
                      languages(first: 10) {
                        totalCount
                        edges {
                          node {
                            name
                            color
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
