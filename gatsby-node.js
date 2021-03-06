/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

// creates urls for posts through the directory, 
// e.g. site.com/2019-09-21-post-title/post-title
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type == `MarkdownRemark`) {
//         /* slug = html link for the blog posts */
//         const slug = createFilePath({ node, getNode })
        
//         createNodeField({
//             node, 
//             name: `slug`,
//             value: slug
//         })
//     }
// }

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/posts.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}