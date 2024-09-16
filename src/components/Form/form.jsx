import { Formik, Form, Field, ErrorMessage } from "formik";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Button from "../Button/button";
import { formValidation } from "../../Validation/formValidation";
import css from "./form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    iziToast.success({
      title: "Booking Submitted",
      message: "Your reservation has been submitted successfully!",
      position: "center",
      timeout: 8000,
    });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.bookingForm}>
            <div className={css.booking}>
              <h3 className={css.bookingTitle}>Book your campervan now</h3>
              <p className={css.bookingText}>
                Stay connected! We are always ready to help you.
              </p>
            </div>

            <label htmlFor="name" className={css.field}>
              <Field
                className={css.bookingInput}
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>

            <label htmlFor="email" className={css.field}>
              <Field
                className={css.bookingInput}
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage name="email" component="div" className={css.error} />
            </label>

            <label htmlFor="date" className={css.field}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setFieldValue("date", date ? date.toISOString().split('T')[0] : '');
                }}
                className={css.bookingInput}
                placeholderText="Booking date*"
                dateFormat="yyyy-MM-dd"
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </label>

            <label htmlFor="comment" className={css.field}>
              <Field
                className={css.bookingInputText}
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" className={css.error} />
            </label>

            <Button text="Send" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
