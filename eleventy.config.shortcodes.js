module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('ref', function(index){
    return `<sup><a href="#footnote-${index}">[${index}]</a></sup>`
  })
}
