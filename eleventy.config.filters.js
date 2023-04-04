const markdownIt = require('markdown-it')


module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('md', function(content = '') {
    return markdownIt({ html: true }).render(content)
  })

  eleventyConfig.addFilter('getAllTags', collections => {
    return Object.keys(collections)
  })

  eleventyConfig.addFilter("filterTags", function filterTagList(tags) {
    return (tags || []).filter(tag => ['all', 'post'].indexOf(tag) === -1);
  })
}
