const markdownItAttrs = require('markdown-it-attrs')


module.exports = function(eleventyConfig) {

  // Copy assets to _site
  eleventyConfig.addPassthroughCopy('assets/images')
  eleventyConfig.addPassthroughCopy('assets/documents')
  eleventyConfig.addPassthroughCopy('assets/javascripts')

  // Add markdown-it-attrs plugin
  eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItAttrs))

  // Enable excerpts
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true })

  // Less
  eleventyConfig.addPlugin(require('./eleventy.config.less.js'))

  // Filters
  eleventyConfig.addPlugin(require('./eleventy.config.filters.js'))

  // Shortcodes
  eleventyConfig.addPlugin(require('./eleventy.config.shortcodes.js'))

  // Custom tags
  eleventyConfig.addPlugin(require('./eleventy.config.image.js'))
  eleventyConfig.addPlugin(require('./eleventy.config.figure.js'))

  // Configure layouts directory
  return { dir: { layouts: '_includes/layouts' } }
}
