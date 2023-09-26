// sum.test.js
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { sum } from './sum'


test('adds 1 + 2 to equal 3', () => {
    assert.is(3, sum(1, 2))
})

test('adds 2 + 2 to equal 4', () => {
    assert.is(4, sum(2, 2))
})

// test('adds 2 + 3 to equal 5', () => {
//    assert.is(5, sum(2, 3))
// })

// test('adds 3 + 3 to equal 6', () => {
//     // Has a bug...
//    assert.is(6, sum(3, 30))
// })

test.run()