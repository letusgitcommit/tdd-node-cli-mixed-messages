const { describe, expect, test } = require('@jest/globals');

describe('simple tests', () => {
    test('adds 1 to 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
})

// TODO: Generate a user story to build a functional test for the application, then you can move on to
//       unit testing various pieces
