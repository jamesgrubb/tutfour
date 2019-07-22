const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === `Airtable` && node.table === `Sections`) {
    slug = `/${node.data.Title.replace(/ /g, "-")
      .replace(/[,&]/g, "")
      .toLowerCase()}/`;

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug });
  }
};