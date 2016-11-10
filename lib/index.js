/**
 * Modules
 */

var raf = require('@f/raf')

/**
 * Expose rafDebounce
 */

module.exports = rafDebounce

/**
 * rafDebounce
 */

function rafDebounce (fn) {
  var pending = null

  return function () {
    if (pending) raf.cancel(pending)
    pending = raf(run)

    return function () {
      raf.cancel(pending)
      pending = null
    }
  }

  function run () {
    pending = null
    fn()
  }
}
