module.exports = function (gulp) {
    'use strict'

    var src = gulp.src
    var dest = gulp.dest
    var task = gulp.task.bind(gulp)
    var watch = gulp.watch.bind(gulp)
    var $ = require('gulp-load-plugins')()

    var globals = function () {

        globals.src = src
        globals.dest = dest
        globals.task = task
        globals.watch = watch
        globals.$ = $

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
