// import { Formik, Form, Field, ErrorMessage } from "formik";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import Button from "../Button/button";
// import { formValidation } from "../../Validation/formValidation";
// import css from "./form.module.css";

// export default function BookingForm() {
//   const handleSubmit = (values, { resetForm }) => {
//     iziToast.success({
//       title: "Booking Submitted",
//       message: "Your reservation has been submitted successfully!",
//       position: "center",
//       timeout: 8000,
//     });
//     resetForm();
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           date: "",
//           comment: "",
//         }}
//         validationSchema={formValidation}
//         onSubmit={handleSubmit}
//       >
//         <Form className={css.bookingForm}>
//           <div className={css.booking}>
//             <h3 className={css.bookingTitle}>Book your campervan now</h3>
//             <p className={css.bookingText}>
//               Stay connected! We are always ready to help you.
//             </p>
//           </div>
//           <div className={css.field}>
//             <label htmlFor="name"></label>
//             <Field
//               className={css.bookingInput}
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Name*"
//             />
//             <ErrorMessage name="name" component="div" className={css.error} />
//           </div>
//           <div className={css.field}>
//             <label htmlFor="email"></label>
//             <Field
//               className={css.bookingInput}
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email*"
//             />
//             <ErrorMessage name="email" component="div" className={css.error} />
//           </div>
//           <div className={css.field}>
//             <label htmlFor="date"></label>
//             <Field
//               className={css.bookingInput}
//               type="text"
//               id="date"
//               name="date"
//               placeholder="Booking date*"
//             />
//             <ErrorMessage name="date" component="div" className={css.error} />
//           </div>
//           <div className={css.field}>
//             <label htmlFor="comment"></label>
//             <Field
//               className={css.bookingInputText}
//               as="textarea"
//               id="comment"
//               name="comment"
//               placeholder="Comment"
//             />
//             <ErrorMessage name="comment" component="div" className={css.error} />
//           </div>
//           <Button text="Send" type="submit" />
//         </Form>
//       </Formik>
//     </div>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Button from "../Button/button";
import { formValidation } from "../../Validation/formValidation";
import css from "./form.module.css";

export default function BookingForm() {
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
            <Field
              className={css.bookingInput}
              type="text"
              id="date"
              name="date"
              placeholder="Booking date*"
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
            <ErrorMessage name="comment" component="div" className={css.error} /></label>
            
          <Button text="Send" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}