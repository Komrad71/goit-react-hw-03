import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min 3 characters")
      .max(50, "max 50 characters")
      .required('Name is required'),
    number: Yup.number().required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form className={css.contactFormWrapper}>
          <div className={css.contactFormWrapperField}>
            <label htmlFor="name"><span>Name</span></label>
            <Field name="name" className={css.contactForm} />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.contactFormWrapperField}>
            <label htmlFor="number"><span>Number</span></label>
            <Field name="number" className={css.contactForm} />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" className={css.contactFormBtn}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
