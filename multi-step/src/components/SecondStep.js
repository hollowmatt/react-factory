import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SecondStep(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useNavigate();
  function onSubmit(data) {
    console.log(data);
    history('/third');
  }

  return(
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
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
          Next
        </Button>
      </div>
    </Form>
  );
}

export default SecondStep;