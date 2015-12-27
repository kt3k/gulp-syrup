var path = require('path')

/**
 * @param {Gulp} gulp The gulp object
 * @param {String|Object} [config] package.json path or package.json contents as object. defaults to this module's parent's package.json
 */
module.exports = function (gulp, config) {
    'use strict'

    config = config || path.dirname(module.parent.filename) + '/package.json'

    var src = gulp.src
    var dest = gulp.dest
    var task = gulp.task.bind(gulp)
    var watch = gulp.watch.bind(gulp)
    var $ = require('gulp-load-plugins')({config: config})

    var globals = function () {

        global.src = src
        global.dest = dest
        global.task = task
        global.watch = watch
        global.$ = $

    }

    return {
        src: src,
        dest: dest,
        task: task,
        watch: watch,
        $: $,
        globals: globals
    }
}
