const path = require("path");

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "MKSOUND",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "58zaqI0YpF1MAja8H3Qzt-IzmGLDhYssM0xJWTCHa8g",
        spaceId: "c3iaqt0dfbx0",
      },
    },

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src", "assets"),
        components: path.join(__dirname, "src", "components"),
        helpers: path.join(__dirname, "src", "helpers"),
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:300,500, 700", "cormorant garamond:500"],
        display: "swap",
      },
    },
  ],
};
