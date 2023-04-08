import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

function FirstStep(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  return(
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            {...register("first_name", { required: true, pattern: /^[A-Za-z]+$/i })}
            aria-invalid={errors.first_name ? "true" : "false"} 
          />
          {errors.first_name?.type === 'required' && <p className="errorMsg">First name is required</p>}
          {errors.first_name?.type === 'pattern' &&  <p className="errorMsg">First name can only be characters</p>}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your Last name"
            autoComplete="off"
            {...register("last_name", { required: true, pattern: /^[A-Za-z]+$/i })}
            aria-invalid={errors.last_name ? "true" : "false"}
          />
          {errors.last_name?.type === 'required' && <p className="errorMsg">Last name is required</p>}
          {errors.last_name?.type === 'pattern' &&  <p className="errorMsg">Last name can only be characters</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
}

export default FirstStep;