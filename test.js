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
