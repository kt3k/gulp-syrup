'use strict'

var test = require('tape')
var syrup = require('./')
var gulp = require('gulp')

test('gulp-syrup', function (t) {
    t.plan(7)

    t.assert(syrup(gulp) instanceof Object, 'syrup returns an object')
    t.assert(syrup(gulp).src instanceof Function, 'src prop is a function')
    t.assert(syrup(gulp).dest instanceof Function, 'dest prop is a function')
    t.assert(syrup(gulp).task instanceof Function, 'task prop is a function')
    t.assert(syrup(gulp).watch instanceof Function, 'watch prop is a function')
    t.assert(syrup(gulp).$ instanceof Object, '$ prop is an object')
    t.assert(syrup(gulp).globals instanceof Function, 'globals prop is a function')
})

test('gulp-syrup().globals() sets global apis', function (t) {
    t.plan(5)

    syrup(gulp).globals()

    t.assert(task instanceof Function, 'task is a function')
    t.assert(watch instanceof Function, 'watch is a function')
    t.assert(src instanceof Function, 'src is a function')
    t.assert(dest instanceof Function, 'dest is a function')
    t.assert($ instanceof Object, '$ is a object')
})
