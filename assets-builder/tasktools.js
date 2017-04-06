'use strict'

var notify = require('./helpers/notify.js')
var concat = require('gulp-concat')
var gulpIf = require('gulp-if')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var size = require('gulp-size')
var sourcemap = require('gulp-sourcemaps')

/**
 * Common tools for tasks. Includes:
 * - concat (gulp-concat),
 * - if (gulp-if),
 * - rename (gulp-rename),
 * - sourcemaps (gulp-sourcemaps),
 * - logerrors (gulp-plumber with a custom notification function),
 * - size (gulp-size)
 */
module.exports = {
  // File/task flow management
  'concat': concat,
  'if': gulpIf,
  'rename': rename,
  'sourcemap': sourcemap,

  // Patch gulp.src's onerror method with gulp-plumber,
  // so that errors in a task are logged but don't kill the task.
  // Usage: gulp.src( … ).pipe( utils.plumbit() ).pipe( … )
  'errors': function() {
    return plumber(notify)
  },

  // Helper function using gulp-size to log the size and path
  // of a file we're about to to write to the filesystem.
  'size': function(dest) {
    return size({
      showFiles: true,
      showTotal: false,
      title: 'Writing → ' + dest + '/'
    })
  }
}
