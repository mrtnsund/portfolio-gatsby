const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === "MarkdownRemark") {
        const { createNodeField } = actions;
        const slug = createFilePath({ node, getNode, basePath: "markdown "})
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}