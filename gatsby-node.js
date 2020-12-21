/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("records not found", result.errors)
  }
  const rooms = result.data.allDatoCmsRoom.nodes

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
