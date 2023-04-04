const { Liquid, Hash } = require('liquidjs')
const image = require('./_includes/javascripts/image.js')
const markdownIt = require('markdown-it')


module.exports = function(eleventyConfig) {
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
          caption = caption.replaceAll('<p>', '').replaceAll('</p>', '')
          caption = `<figcaption>${caption}</figcaption>`
        } else {
          caption = ''
        }

        return `<figure>${images}${caption}</figure>`
      }
    }
  })
}
