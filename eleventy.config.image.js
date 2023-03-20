const { Liquid, Hash } = require('liquidjs')
const image = require('./_includes/javascripts/image.js')


module.exports = (eleventyConfig) => {
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
}
