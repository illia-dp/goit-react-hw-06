import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";
import s from "./ContactForm.module.css";

const contactFormSchema = object({
  name: string().required().min(3).max(50),
  number: string().required().min(7).max(7),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        const formData = { id: nanoid(), ...values };
        addContact(formData);
        actions.resetForm();
      }}
      validationSchema={contactFormSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage
            className={s.errorMessage}
            component="div"
            name="name"
          />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field className={s.input} name="number" type="tel" />
          <ErrorMessage
            className={s.errorMessage}
            component="div"
            name="number"
          />
        </label>
        <button className={s.button} type="submit" size="medium">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
