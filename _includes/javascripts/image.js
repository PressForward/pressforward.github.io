module.exports = function image(src, width, height, alt, className, href) {
  if (src) {
    if (src.includes('@2x')) {
      src = `srcset="${src.replace('@2x', '')} 1x, ${src} 2x"
             src="${src.replace('@2x', '')}"`
    } else {
      src= `src="${src}"`
    }
  } else {
    src = ''
  }

  width = width ? ` width="${width}"` : ''
  height = height ? ` height="${height}"` : ''
  alt = alt ? ` alt="${alt}"` : ''
  className = className ? ` class="${className}"` : ''

  if (href) {
    return `<a href="${href}"><img ${src}${width}${height}${alt}${className}></a>`
  } else {
    return `<img ${src}${width}${height}${alt}${className}>`
  }
}
