'use strict';

var grunt = require('grunt'),
  rimraf = require('rimraf');

exports['delete'] = {
  setUp: function(done) {
    done();
  },
  'rimraf': function(test) {
    var file = 'target/test-1';
    
    test.expect(2);

    test.equal(grunt.file.exists(file), true, 'file should exist.');
    rimraf.sync(file);
    test.equal(grunt.file.exists(file), false, 'file should have been deleted.');

    test.done();
  },
  'grunt': function(test) {
    var file = 'target/test-2';
    
    test.expect(2);

    test.ok(grunt.file.delete(file), 'should return true after deleting file.');
    test.equal(grunt.file.exists(file), false, 'file should have been deleted.');

    test.done();
  }
};
