module.exports = function (gulp) {
    var words = {}

    words.src = gulp.src
    words.dest = gulp.dest
    words.task = gulp.task.bind(gulp)
    words.watch = gulp.watch.bind(gulp)
    words.$ = require('gulp-load-plugins')()

    return words
}

module.exports.globals = function (gulp) {
    var words = module.exports(gulp)

    globals.src = words.src
    globals.dest = words.dest
    globals.task = words.task
    globals.watch = words.watch
    globals.$ = words.$
}
