import User from '../src/models/User';
import { UserController } from '../src/controllers/User';
const { expect } = require('chai');


describe('User Controller', () => {
  // Test the createUser function
  describe('createUser', () => {
    it('should create a new user', async () => {
      // Define a sample user object for testing
      const sampleUser = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'testpassword',
      
      };
     
      const createdUser = await UserController.register(sampleUser);

      // Verify that the user was created
      expect(createdUser).to.be.an('object');
      expect(createdUser).to.have.property('id');
      expect(createdUser).to.have.property('username', sampleUser.username);
      expect(createdUser).to.have.property('email', sampleUser.email);
     

      // Optionally, you can clean up the test data, e.g., by deleting the test user
      await User.destroy({ where: { id: createdUser.id } });
    });
  });
});
