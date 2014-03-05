"use strict";

describe('path', function () {
    
    var pathUtil = require('path');
    var jetpack = require('..');
    
    it('if empty should be the same as cwd()', function () {
        expect(jetpack.path()).toBe(jetpack.cwd());
        expect(jetpack.path('')).toBe(jetpack.cwd());
        expect(jetpack.path('.')).toBe(jetpack.cwd());
    });
    
    it('should be absolute if prepending slash present', function () {
        expect(jetpack.path('/blah')).toBe(pathUtil.resolve('/blah'));
    });
    
    it('should be resolved to cwd value', function () {
        var blah = pathUtil.join(jetpack.cwd(), 'blah');
        expect(jetpack.path('blah')).toBe(blah);
    });
    
    it('can take unlimited amount of arguments as path parts', function () {
        var abc = pathUtil.join(jetpack.cwd(), 'a', 'b', 'c');
        expect(jetpack.path('a', 'b', 'c')).toBe(abc);
    });
    
});
