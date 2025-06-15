import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../redux/contactsSlice";
import Cleave from "cleave.js/react";
import s from "./ContactForm.module.css";

const contactFormSchema = object({
  name: string().required().min(3).max(50),
  number: string()
    .required("Phone number is required")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format 123-45-67"
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        const formData = { id: nanoid(), ...values };
        dispatch(addContactAction(formData));
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
          <Field name="number">
            {({ field }) => (
              <Cleave
                {...field}
                className={s.input}
                options={{
                  blocks: [3, 2, 2],
                  numericOnly: true,
                  delimiter: "-",
                }}
              />
            )}
          </Field>
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
