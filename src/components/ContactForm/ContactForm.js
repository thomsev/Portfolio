import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css'

const ContactForm = () => {
  // Yup validation schema
  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="John Doe" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="johndoe@example.com" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="message">Message</label>
            <Field id="message" name="message" component="textarea" placeholder="Your message..." />
            <ErrorMessage name="message" component="div" />

            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
