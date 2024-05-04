const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

beforeAll(async () => {
  jest.setTimeout(20000); // Increase timeout to 20 seconds
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  jest.setTimeout(20000); // Increase timeout to 20 seconds
  await mongoose.connection.close();
});

describe('User Model', () => {
  it('should be able to create a new user', async () => {
    const userData = {
      Fullname: 'John Doe1',
      Email: 'john1@example.com',
      JobStatus: 'user',
      Password: 'password123',
    };

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ Email: userData.Email });
    if (existingUser) {
      console.log('User with the same email already exists');
      return; // Exit the test
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.Fullname).toBe(userData.Fullname);
    expect(savedUser.Email).toBe(userData.Email);
    expect(savedUser.JobStatus).toBe(userData.JobStatus);
    expect(savedUser.Password).toBe(userData.Password);
  });

  it('should require Fullname field', async () => {
    const userWithoutFullname = new User({
      Email: 'jane1@example.com',
      JobStatus: 'user',
      Password: 'password456',
    });

    let err;
    try {
      await userWithoutFullname.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Fullname).toBeDefined();
  });
});
