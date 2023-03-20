const less = require('less')
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const { Liquid, Hash } = require('liquidjs')
const image = require('./_includes/javascripts/image.js')


module.exports = function(eleventyConfig) {
  // Copy assets to _site
  eleventyConfig.addPassthroughCopy('assets/images')
  eleventyConfig.addPassthroughCopy('assets/documents')

  // Add Less
  eleventyConfig.addTemplateFormats('less')

  eleventyConfig.addExtension('less', {
    outputFileExtension: 'css',

    compileOptions: {
      cache: false
    },

    compile: async (input) => {
      let options = { math: 'always' }
      let output = await less.render(input, options)

      return () => output.css
    }
  })

  // Enable excerpts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  })

  // Markdown filter for excerpts
  eleventyConfig.addFilter('md', function(content = '') {
    return markdownIt({ html: true }).render(content)
  })

  // Add markdown-it-attrs plugin
  eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItAttrs));

  // Add reference shortcode
  eleventyConfig.addShortcode('ref', function(index){
    return `<sup><a href="#footnote-${index}">[${index}]</a></sup>`
  })

  // Add custom image tag
  eleventyConfig.addLiquidTag('image', function(liquidEngine) {
    return {
      parse: function(tagToken) {
        this.args = new Hash(tagToken.args)
      },
      render: function*(context) {
        let { src, width, height, alt, className, href } = yield this.args.render(context)

        return image(src, width, height, alt, className, href)
      }
    }
  })

  // Add custom figure tag
  eleventyConfig.addLiquidTag('figure', function(liquidEngine) {
    return {
      parse: function(tagToken) {
        this.args = new Hash(tagToken.args)
      },
      render: function*(context) {
        let { src, width, height, alt, className, href, caption } = yield this.args.render(context)
        let images = ''
        let srcs = src.replace(/ /g,'').split(',')

        alt = alt ? alt : caption

        srcs.forEach(src => {
          images += image(src, width, height, alt, className, href)
        })

        if (caption) {
          caption = yield liquidEngine.parseAndRender(caption, context)
          caption = markdownIt({ html: true, breaks: true }).render(caption)
          caption = caption.replace('<p>', '').replace('</p>', '')
          caption = `<figcaption>${caption}</figcaption>`
        } else {
          caption = ''
        }

        return `<figure>${images}${caption}</figure>`
      }
    }
  })

  // Configure layouts directory
  return {
    dir: {
      layouts: '_includes/layouts'
    }
  }
}
