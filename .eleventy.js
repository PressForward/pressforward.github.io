const less = require('less')


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets/images')

  eleventyConfig.addTemplateFormats('less')

  eleventyConfig.addExtension("less", {
    outputFileExtension: "css",

    compileOptions: {
      cache: false
    },

    compile: async (input) => {
      let options = { math: 'always' }
      let output = await less.render(input, options)

      return () => output.css
    }
  })
}
