const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postBike = path.resolve('src/templates/motorbike-post.js')
  const eventTemplate = path.resolve('src/templates/events-post.js')
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
    result.data.allMarkdownRemark.edges.forEach(({ edge }) => {

      if ((edge.node.frontmatter.product === 'motorbike') || ( edge.node.frontmatter.product === 'scooter' )) {
        createPage({
          path: node.fields.slug,
          component: postBike,
          context: {
              slug: node.fields.slug,
          },
        })
      } else {
        createPage({
          path: edge.frontmatter.path,
          component: eventTemplate,
          context: {}
        })
      }
    })
  })
}