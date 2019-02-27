const path = require(`path`)

module.exports = {
    siteMetadata: {
        title: `Trago2Wheels`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                `Roboto`,
                `Montserrat` 
                ]
            },
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1080,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/pages`,
            },
        },
    ],
  }