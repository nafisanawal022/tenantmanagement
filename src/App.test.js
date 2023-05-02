const request = require('supertest');

const app = require('../../server');
const mongoose = require('mongoose');
const User = require("../../models/userModel");
import {message} from 'antd'

import axios from 'axios';
import { getAllFlats,addingFlat } from './redux/actions/flatsActions';

jest.mock('axios');
jest.mock('antd', () => ({ message: { success: jest.fn(), error: jest.fn() } }));

describe('POST /register', () => {
  let dispatch;
  const reqObj = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contactNumber: '1234567890',
    altContactNumber: '0987654321',
    nidNo: '1234567890123',
    flatNo: '10003',
    rent: 10000,
    password: 'password',
  };
  const responseData = { _id: '1234567890', ...reqObj };

  afterEach(() => {
    dispatch = jest.fn();
    jest.clearAllMocks();
  });

  it('fetches all flats successfully and dispatches GET_ALL_FLATS action', async () => {
    const flats = [
      { id: 1, flatNo: '101', rent: 5000 },
      { id: 2, flatNo: '102', rent: 5500 },
    ];
    axios.get.mockResolvedValue({ data: flats });

    const dispatch = jest.fn();
    await getAllFlats()(dispatch);

    expect(axios.get).toHaveBeenCalledWith('/api/flats/getallflats');
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: true });
    expect(dispatch).toHaveBeenCalledWith({ type: 'GET_ALL_FLATS', payload: flats });
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: false });
  });

  it('handles error while fetching all flats and dispatches LOADING action with payload false', async () => {
    const error = new Error('Failed to fetch flats');
    axios.get.mockRejectedValue(error);

    const dispatch = jest.fn();
    await getAllFlats()(dispatch);

    expect(axios.get).toHaveBeenCalledWith('/api/flats/getallflats');
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: true });
    expect(dispatch).not.toHaveBeenCalledWith({ type: 'GET_ALL_FLATS' });
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: false });
  });
  
  it('should add a new flat and redirect to admin home page on success', async () => {
    axios.post.mockResolvedValueOnce({ data: responseData });

    await addingFlat(reqObj)(dispatch);

    expect(axios.post).toHaveBeenCalledWith('/api/flats/addflat', reqObj);
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: true });
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: false });
    expect(message.success).toHaveBeenCalledWith('New flat added successfully');
  });

  it('should handle error and display error message', async () => {
    const error = new Error('Something went wrong');
    axios.post.mockRejectedValueOnce(error);

    await addingFlat(reqObj)(dispatch);

    expect(axios.post).toHaveBeenCalledWith('/api/flats/addflat', reqObj);
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: true });
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOADING', payload: false });
    expect(message.error).toHaveBeenCalledWith('Something went wrong');
  });

  test('should register a new user', async () => {
    // Send a registration request with valid user data


    const response = await request(app)
      .post('/api/users/register')
      .send(reqObj);

    // Expect the response to have a 200 status code and a success messag
    expect(response.status).toBe(200);
    expect(response.text).toBe('User registered successfully');

    // Delete the user from the database
    await User.deleteOne({ flatNo: '10003', password: 'password' });
  });

  test('should return a 400 error with invalid user data', async () => {
    // Send a registration request with invalid user data
    const response = await request(app)
      .post('/api/users/register')
      .send({ invalidField: 'invalidValue' });

    // Expect the response to have a 400 status code and an error message
    expect(response.status).toBe(400);
    expect(response.body.message.startsWith("users validation failed")).toBeTrue;
  });


  it('should return the user details for valid login credentials', async () => {
    //Create a test user
    const user = new User(reqObj);
    await user.save();

    // Make a request with the test user's login credential
    const response = await request(app)
      .post('/api/users/login')
      .send({
        flatNo: '10003',
        password: 'password',
      });
    console.log(response);
    // Expect the response to have the user detail
    expect(response.statusCode).toBe(200);
    expect(response.body.firstName).toBe('John');
    expect(response.body.lastName).toBe('Doe');
    expect(response.body.email).toBe('john.doe@example.com');
    expect(response.body.contactNumber).toBe('1234567890');
    expect(response.body.altContactNumber).toBe('0987654321');
    expect(response.body.nidNo).toBe('1234567890123');
    expect(response.body.flatNo).toBe('10003');
    expect(response.body.rent).toBe(10000);
    expect(response.body.password).toBe('password');

    await User.deleteOne({ flatNo: '10003', password: 'password' });
  });
});
