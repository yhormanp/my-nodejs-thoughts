const assert = require('assert');

const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', () => {
  describe('when receives an entity and an action', () => {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    });


  });

  describe('when  receives and entity and an action and  is a list', () => {
      it('should return the respective message with the entity in plural', function () {

        const result = buildMessage('movie','list');
        const expect = 'movies listed';
        assert.strictEqual(result, expect);
      })
  })
  
});
