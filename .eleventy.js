const eleventySass = require('eleventy-sass')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets/images')

  eleventyConfig.addPlugin(eleventySass)
}
