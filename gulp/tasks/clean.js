const del = require('del')

const clean = (cb) => {
  return del($.config.root, cb)
}

module.exports = clean
