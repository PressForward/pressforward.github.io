module.exports = {
  install: (less, pluginManager, functions) => {
    functions.add('rem', (size) => {
      return `${size.value / 16}rem`
    })
  }
}
