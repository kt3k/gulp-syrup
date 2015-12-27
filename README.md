# gulp-syrup v1.0.4

> Syntax syrup for gulpfile

# Usage

In your gulpfile, `gulp-syrup` works like the following.

```js
const {task, src, dest, $} = require('gulp-syrup')(require('gulp'))

task('default', () =>
  src('src/**/*.js')
    .pipe($.somePlugin())
    .pipe(dest('dist/')))
```

`gulp-syrup` returns the static versions of the gulp APIs and `$` as `gulp-load-plugins`.

## Expose to globals

It's useful if it works but be careful.

```js
require('gulp-syrup')(require('gulp')).globals()

task('default', () =>
  src('src/**/*.js')
    .pipe($.somePlugin())
    .pipe(dest('dist/')))
```

*This exposes the gulp APIs and `gulp-load-plugins` to the global namespace of gulpfile i.e. exposes `src`, `dest`, `task`, `watch` and `$`.*


# Install

    npm install --save-dev gulp-syrup

# License

MIT
