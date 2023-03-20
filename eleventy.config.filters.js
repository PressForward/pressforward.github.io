const markdownIt = require('markdown-it')


module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('md', function(content = '') {
    return markdownIt({ html: true }).render(content)
  })
}
