import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      user_email: '',
      user_password: ''
    }
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState('');

  const onSubmit = async(data) => {
    console.log(data);

    try {
      const response = await axios.post(`${BASE_API_URL}/login`, data);
      setSuccessMessage('User found');
      setErrorMessage('');
      setUserDetails(response.data);
    } catch(err) {
      console.log(err);
      if(err.response) {
        console.log('error: ', err.response.data);
        setErrorMessage(err.response.data);
        setUserDetails('');
      }
    }
  };

  return(
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        {errorMessage ? (
          <p className="errorMsg login-error">{errorMessage}</p>
        ) : (
          <div>
            <p className="successMsg">{successMessage}</p>

            {userDetails && (
              <div className="user-details">
                <p>Following are the user details:</p>
                <div>First name: {userDetails.first_name}</div>
                <div>Last name: {userDetails.last_name}</div>
                <div>Email: {userDetails.user_email}</div>
                <div>Country: {userDetails.country}</div>
                <div>State: {userDetails.state}</div>
                <div>City: {userDetails.city}</div>
              </div>
            )}
          </div>
        )}
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="user_email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("user_email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
            aria-invalid={errors.user_email ? "true" : "false"} 
          />
          {errors.user_email?.type === 'required' && <p className="errorMsg">Email is required</p>}
          {errors.user_email?.type === 'pattern' &&  <p className="errorMsg">Invalid email address</p>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a Password"
            autoComplete="off"
            {...register("user_password", { required: true, minLength: 8 })}
            aria-invalid={errors.user_password ? "true" : "false"}
          />
          {errors.user_password?.type === 'required' && <p className="errorMsg">Password is required</p>}
          {errors.user_password?.type === 'minLength' &&  <p className="errorMsg">Password must be minimum 8 characters</p>}
        </Form.Group>

        <Button variant="primary" type="submit" style={{marginTop: '1em'}}>
          Check Login
        </Button>
      </div>
    </Form>
  );
}

export default Login;