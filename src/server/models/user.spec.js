const userModel = require('./user');

describe('models/user.js', () => {
  let model;

  beforeEach(() => {
    model = {};

    userModel(model);
  });

  it('should bind the correct methods', () => {

  });

  it('list should return the correct response', async () => {

  });

  it('list should throw an error if user service throws an error', async () => {

  });

  it('list should throw an error if todo service throws an error', async () => {

  });

  it('get should return the correct response', async () => {

  });

  it('get should throw an error if the user service throws an error', async () => {

  });

  it('get should throw an error if the todo service throws an error', async () => {

  });
});
