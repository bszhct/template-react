const config = require('@bszhct/template-webpack')

const isDev = process.env.NODE_ENV === 'development'
config.dev.externals = {}
config.prod.externals = {}

module.exports = isDev ? config.dev : config.prod
