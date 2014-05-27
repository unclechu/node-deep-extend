var should = require('should');
var extend = require('../index');

describe('deep-extend', function() {

  it('can extend on 1 level', function() {
    var a = { hello: 1 };
    var b = { world: 2 };
    extend(a, b);
    a.should.eql({
      hello: 1,
      world: 2
    });
  });

  it('can extend on 2 levels', function() {
    var a = { person: { name: 'John' } };
    var b = { person: { age: 30 } };
    extend(a, b);
    a.should.eql({
      person: { name: 'John', age: 30 }
    });
  });

  it('can extend with Buffer values', function() {
    var a = { hello: 1 };
    var b = { value: new Buffer('world') };
    extend(a, b);
    a.should.eql({
      hello: 1,
      value: new Buffer('world')
    });
  });

});
